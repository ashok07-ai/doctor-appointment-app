import Doctor from "../models/DoctorSchema.js";

// get all doctors
export const getAllDoctor = async (req, res) => {
    try {
        const { query } = req.query;
        let doctors
        if (query) {
            doctors = await Doctor.find({
                isApproved: "approved",
                $or: [
                    {
                        name: {
                            $regex: query,
                            $options: "i"
                        }
                    },
                    {
                        specialization: {
                            $regex: query,
                            $options: "i"
                        }
                    }
                ]
            }).select("-password")
        } else {
            doctors = await Doctor.find({ isApproved: "approved" }).select("-password");

        }
        res.status(200).json({ success: true, message: "Doctors found!!", data: doctors })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });

    }
}

// get specific doctor from id
export const getDoctorById = async (req, res) => {
    try {
        const doctorId = req.params.id;
        const doctor = await Doctor.findById(doctorId).populate('reviews').select('-password');
        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found!!' });
        }
        res.status(200).json({ success: true, message: "Doctor found!!", data: doctor })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });

    }
}
// update doctor
export const updateDoctor = async (req, res) => {
    try {
        const doctorId = req.params.id;
        const updatedData = req.body;

        const doctor = await Doctor.findByIdAndUpdate(doctorId, updatedData, { new: true })
        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found!!' });

        }
        res.status(200).json({ success: true, message: "Doctor updated successfully!!", data: updatedData })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });

    }
}


// delete doctor
export const deleteDoctor = async (req, res) => {
    try {
        const doctorId = req.params.id;
        const doctor = await Doctor.findByIdAndDelete(doctorId)
        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found!!' });

        }
        res.status(200).json({ success: true, message: "Doctor deleted successfully!!" })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });

    }
}