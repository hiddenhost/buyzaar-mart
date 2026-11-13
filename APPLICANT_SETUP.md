# Applicant registration setup

The applicant portal uses MySQL through Prisma and Cloudinary for private CV storage. Configure the required secrets in the deployment environment (or in a local `.env` file) before enabling registration:

- `DATABASE_URL`: MySQL connection string.
- `APPLICANT_SESSION_SECRET`: random secret with at least 32 characters.
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`: Cloudinary credentials.

Then run:

```sh
npm install
npm run db:generate
npm run db:migrate
npm run dev
```

In production, add the same environment variables to the hosting provider, run `npm run db:generate` during the build, and run `npm run db:migrate` as a release/deployment step. CVs are uploaded as authenticated Cloudinary raw resources; the database stores their secure URL and public ID. Passwords are hashed with bcrypt and applicant sessions use signed, HTTP-only cookies.
