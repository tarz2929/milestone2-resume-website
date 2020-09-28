import React, {useState} from 'react';



function ContactMe() {
    const [name,setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [comments, setComments] =useState("")


    return (

        <section id="ContactMe"><div className="container">
            <form action="mailto:mail@tarun.com" method="get" encType="text/plain">
                <div>
                    <label htmlFor="name">Name:
            <input type="text" name="name" id="name" />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">Email:
            <input type="text" name="email" id="email" />
                    </label>
                </div>
                <div>
                    <label htmlFor="subject">Subject:
            <input type="text" name="subject" id="subject" />
                    </label>
                </div>
                <div>
                    <label>Comments:</label>
                    <br />                    
                    <textarea name="comments" id="message" rows={12} cols={35} placeholder="Please send your message here." defaultValue={""} />
                </div>
                <div>
                    <input type="button" id="send-email" onclick="validateMeessage()" name="submit" defaultValue="Send" />
                    <input type="reset" name="reset" defaultValue="Clear Form" />
                </div>
            </form>

        </div>

        </section>

    )
}


export default ContactMe;