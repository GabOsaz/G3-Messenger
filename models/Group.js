import { Schema, model } from 'mongoose';

// Create Schema
const GroupModel = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  adminId: {
      type: String,
      required: true
  },
  image: {
    type: String,
    required: true,
    default:
      'https://images.unsplash.com/photo-1580169980114-ccd0babfa840?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9'
  }
});

const Group = model('group', GroupModel);

export default Group;
