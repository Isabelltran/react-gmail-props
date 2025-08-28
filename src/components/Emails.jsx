import Email from './Email'

function Emails({ emails, toggleRead, toggleStar }) {

    return (
        <main className="emails">
        <ul>
          {emails.map((email, index) => (
            <Email
              key={index}
              email={email}
              toggleRead={toggleRead}
              toggleStar={toggleStar}
            />
          ))}
        </ul>
      </main>
    )

}

export default Emails;
        
