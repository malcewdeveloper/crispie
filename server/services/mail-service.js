const nodemailer = require('nodemailer');

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: '',
            port: '',
            secure: false,
            auth: {
                user: '',
                pass: ''
            }
        })
    }
    
    async sendActiovationLink(to, link) {
        await this.transporter.sendMail({
            from: '',
            to,
            subject: `Активация аккаунт на ${process.env.CLIENT_URL}`,
            text: '',
            html: 
            `
                <div>
                    <h1>Активация аккаунта</h1>
                    <a href="${link}">${link}</a>
                </div>
            `
        })
    }
}

module.exports = new MailService();