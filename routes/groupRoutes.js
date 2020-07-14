import Group from "../models/Group";
import { Router } from "express";
import User from "../models/userModel";
import auth from '../middleware/auth';
import checkJwt from '../middleware/verifyJwt'

const router = Router();

router.get("/", auth, async (req, res) => {
  //  get list of all the groups in the db
  try {
    const groups = await Group.find();
    if (!groups) throw Error('No groups exist');
    res.json(groups);
  } catch (err) {
    console.log(err);
    res.status(400).json({message: err.message});
  }
});

router.post("/", checkJwt, auth, async (req, res) => {
  try {
    const group = new Group({
      name: req.body.name,
      description: req.body.description,
      register_date: req.body.register_date,
      image: req.body.image,
      adminId: req.user.sub
    });
    
    const savedGroup = group.save();
    if(savedGroup) {
        return res.json({
            message: 'Group created!',
            savedGroup
          });
        } else {
          return res.status(400).json({
            message: 'There was a problem creating your group'
          });
        }
    } catch (err) {
        return res.status(400).json({
          message: 'There was a problem creating your group'
        });
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        const user = await User.findById( req.user.id );
        if( !user ) throw Error('Invalid user');

        const { _id } = user;
        const group = await Group.findById(req.params.id);
        if (!group) throw Error('No group found');

        const { adminId } = group;
        if(_id !== adminId) throw Error('Insufficient user role');

        const removed = await group.remove();
        if (!removed) throw Error('Something went wrong while trying to delete the group');
        res.status(200).json({ success: true });
    } catch(err) {
        res.status(400).json({ msg: err.message, success: false });
    }
})

export default router;
