import { Router } from "express";
import { deleteEnquiry, getEnquiries, submitEnquiry, updateEnquiryStatus } from "../controllers/enquiryController";
import { adminOnly, protect } from "../middleware/authMiddleware";


const router = Router()

router.post("/", submitEnquiry)

// Protected, admin only
router.get("/", protect, adminOnly, getEnquiries)
router.put("/:id", protect, adminOnly, updateEnquiryStatus)
router.delete("/:id", protect, adminOnly, deleteEnquiry)

export default router