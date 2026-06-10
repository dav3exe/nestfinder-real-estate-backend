import { Router } from "express";
import { createProperty, deleteProperty, getAllPropertiesAdmin, getDashboardStats, getProperties, getProperty, updateProperty } from "../controllers/propertyController";
import { protect, adminOnly } from "../middleware/authMiddleware";


// // property routes
// const router = Router()

// // public route - no token needed
// router.get("/", getProperties)
// router.get("/:id", getProperty)


// // admin routes
// router.get("/admin/all", protect, adminOnly, getAllPropertiesAdmin)
// router.get("/stats/", protect, adminOnly, getDashboardStats)
// // token needed
// router.post("/", protect, adminOnly, createProperty)
// router.put("/admin/:id", protect, adminOnly, updateProperty)
// router.delete("/admin/:id", protect, adminOnly, deleteProperty)



// export default router

const router = Router()

// public routes
router.get("/", getProperties)

// admin routes FIRST (important)
router.get("/admin/all", protect, adminOnly, getAllPropertiesAdmin)
router.get("/stats", protect, adminOnly, getDashboardStats)

router.post("/", protect, adminOnly, createProperty)

// dynamic route LAST
router.get("/:id", getProperty)
router.put("/admin/:id", protect, adminOnly, updateProperty)
router.delete("/admin/:id", protect, adminOnly, deleteProperty)

export default router