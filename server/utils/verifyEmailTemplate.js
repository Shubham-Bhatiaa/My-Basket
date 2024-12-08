const verifyEmailTemplate = ({ name, url }) => {
    return `
        <div style="font-family: Arial, sans-serif; color: #333;">
            <p style="font-size: 18px; margin-bottom: 20px;">Dear ${name},</p>
            <p style="margin: 20px 0; font-size: 20px;">Thank you for choosing BinkeyIt!</p>
                <a href="${url}" style="text-decoration: none;">
                    <button style="color: white; border-radius:10px; font-weight: bold; padding: 10px 20px; background-color: blue; cursor: pointer; font-size: 16px;">Verify Email</button>
                </a>
        </div>
    `;
};

export default verifyEmailTemplate;