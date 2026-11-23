# NestFinder API

REST API for NestFinder, a property listing site for people renting or buying homes in Nigeria. It handles accounts, property listings, image uploads, agent enquiries and the admin dashboard.

**Frontend:** [nestfinder-real-estate](https://github.com/dav3exe/nestfinder-real-estate) · live at https://nestfinder-real-estate.vercel.app

Built as a team project during Tech Studio Academy's full-stack training. My part on the backend: the listings endpoint behind the all-properties page (only published listings are returned) and the admin-only routes for managing properties, enquiries and users.

## Stack

Node.js, TypeScript, Express 5, MongoDB with Mongoose, JWT auth with bcrypt, Cloudinary for property images (uploads through express-fileupload, 10 MB per file), Brevo for verification and password reset emails.

## Endpoints

All routes are under `/api`. "Admin" means a valid JWT for a user with the admin role.

**Health**

| Method | Path | Access |
| --- | --- | --- |
| GET | `/api/health` | Public |

**Auth** (`/api/auth`)

| Method | Path | Access | What it does |
| --- | --- | --- | --- |
| POST | `/register` | Public | Create an account and send a verification email |
| GET | `/verify-email/:token` | Public | Verify an email address |
| POST | `/login` | Public | Log in and get a JWT |
| POST | `/forgot-password` | Public | Send a password reset email |
| POST | `/reset-password/:token` | Public | Set a new password |
| GET | `/me` | Signed in | The current user |
| GET | `/users/count` | Admin | Number of users |
| GET | `/users/count/all` | Admin | All users |
| DELETE | `/delete/:id` | Admin | Delete a user |

**Properties** (`/api/properties`)

| Method | Path | Access | What it does |
| --- | --- | --- | --- |
| GET | `/` | Public | Published listings |
| GET | `/:id` | Public | One property |
| GET | `/admin/all` | Admin | All listings, including drafts |
| GET | `/stats/` | Admin | Dashboard numbers |
| POST | `/` | Admin | Create a property |
| PUT | `/admin/:id` | Admin | Update a property |
| DELETE | `/admin/:id` | Admin | Delete a property |

**Enquiries** (`/api/enquiries`)

| Method | Path | Access | What it does |
| --- | --- | --- | --- |
| POST | `/` | Public | Send an enquiry to the agent |
| GET | `/` | Admin | All enquiries |
| PUT | `/:id` | Admin | Update an enquiry's status |
| DELETE | `/:id` | Admin | Delete an enquiry |

## Run locally

```bash
npm install
npm run dev
```

The server starts on `PORT` (default `4040`). For production: `npm run build`, then `npm start`.

Create a `.env` file in the project root:

| Variable | What it's for |
| --- | --- |
| `MONGO_URI` | MongoDB connection string |
| `PORT` | Server port (default `4040`) |
| `NODE_ENV` | `development` or `production` |
| `CLIENT_URL` | Frontend URL, used for CORS and links in emails |
| `JWT_SECRET` | Secret for signing tokens |
| `JWT_EXPIRE` | Token lifetime |
| `EMAIL_VERIFY_TOKEN_EXPIRE` | Lifetime of email verification links |
| `RESET_TOKEN_EXPIRE` | Lifetime of password reset links |
| `BREVO_API_KEY` | Brevo key for sending emails |
| `EMAIL_FROM` | Sender address for emails |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary account for property images |
| `CLOUDINARY_API_KEY` | Cloudinary key |
| `CLOUDINARY_API_SECRET` | Cloudinary secret |
| `ADMIN_EMAIL` | Admin account used by `src/utils/seedAdmin.ts` |
| `ADMIN_PASSWORD` | Admin password used by `src/utils/seedAdmin.ts` |
