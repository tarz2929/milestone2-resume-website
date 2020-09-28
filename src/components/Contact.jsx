import React, { useState } from 'react';



function ContactMe() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [comments, setComments] = useState("")
    const onSubmit = () => {
        console.log(name, email, subject, comments)
        const swearWords = ["feldercarb", "frack", "skinjob", "vulgacarb"]
        let falseMessage = false
        for (let i = 0; i < swearWords.length; i++) {
            if (comments.toLowerCase().indexOf(swearWords[i]) !== -1) {
                falseMessage = true;
                break;
            }
        }
        console.log(falseMessage)
        if (falseMessage) {
            alert("We have zero tolerance for unprofessional language.");
        } else {
            window.location.href = 'mailto:mail@tarun.com?subject=' + name + subject + ' (' + email + ')' + '&body=' + comments;
        }



    }


    return (

        <section id="ContactMe"><div className="container">

            <h2 className="centertitle">Contact Me</h2>

            <div classname="ContactMebox">


            
            <form onSubmit={onSubmit} action="mailto:mail@tarun.com" method="get" encType="text/plain">
                <div>
                    <label htmlFor="name">Name:
            <input onChange={(e) => {
                            setName(e.target.value)
                        }} type="text" name="name" id="name" required />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">Email:
            <input onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                            type="text" name="email" id="email" required />
                    </label>
                </div>
                <div>
                    <label htmlFor="subject">Subject:
            <input onChange={(e) => {
                            setSubject(e.target.value)
                        }} type="text" name="subject" id="subject" required />
                    </label>
                </div>
                <div>
                    <label>Comments:</label>
                    <br />
                    <textarea onChange={(e) => {
                        setComments(e.target.value)
                    }} name="comments" id="message" rows={12} cols={35} placeholder="Please send your message here." defaultValue={""} required />
                </div>
                <div>
                    <input type="submit" id="send-email" name="submit" defaultValue="Send" />
                    <input type="reset" name="reset" defaultValue="Clear Form" />
                </div>
            </form>

        </div>

        </div>

        </section>

    )
}


export default ContactMe;