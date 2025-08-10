const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Please provide a name'
        ],
        trim: true
    },
    email: {
        type: String,
        required: [
            true,
            'Please provide an email'
        ],
        trim: true
    },
    password: {
        type: String,
        required: [
            true,
            'Please provide a password'
        ],
        minlength: 8
    }
}, { timestamps: true })

UserSchema.pre('save', async (next) => {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 18);
    next();
});

UserSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password)
}

module.exports = mongoose.model('User', UserSchema);