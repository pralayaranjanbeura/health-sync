
import  {updateDoctor,deleteDoctor,getAllDoctor,getSingleDoctor,doctorProfile} from '../controllers/doctorController.js'
import  express from "express" 
import {authenticate, restrict} from "../auth/verifyToken.js"
import reviewRouter from './review.js'



const router =express.Router();

// nested route

router.use('/:doctorId/reviews',reviewRouter)


router.get('/:id',getSingleDoctor)
router.get('/',getAllDoctor)
router.put('/:id',authenticate,updateDoctor)
router.delete('/:id',authenticate,restrict(["doctor"]),deleteDoctor)
router.get('/profile/me',authenticate,restrict(["doctor"]),doctorProfile)

export default  router
