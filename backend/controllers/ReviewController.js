import Review from "../models/ReviewSchema.js"
import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";

// get all reviews
export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({});
        res.status(200).json({ success: true, message: "Reviews found!!", data: reviews })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });

    }
}


// create review
export const createReview = async (req, res) => {
    try {
        if (!req.body.doctor) req.body.doctor = req.params.doctorId;
        if (!req.body.user) req.body.user = req.userId;

        const newReview = new Review(req.body);
        const savedReview = await newReview.save();
        await Doctor.findByIdAndUpdate(req.body.doctor, {
            $push: { reviews: savedReview }
        });
        res.status(200).json({ success: true, message: "Review added successfully!!", data: savedReview })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });

    }
}