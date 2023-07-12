import { withIronSession } from 'next-iron-session';

export default withIronSession(
    async (req, res) => {
        // Votre logique de gestion de session ici
    },
    {
        password: 'super_secret_password',
        cookieName: 'your_session_cookie_name',
        cookieOptions: {
            secure: process.env.NODE_ENV === 'production',
        },
    }
);
