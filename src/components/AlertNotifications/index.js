// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const successNotification = () => (
    <Notification>
      <div>
        <AiFillCheckCircle className="icons" />
      </div>

      <div className="text-status">
        <h1 className="icons">Success</h1>
        <p>You can access all the files in the folder</p>
      </div>
    </Notification>
  )

  const errorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="icone" />
      <div className="text-status">
        <h1 className="icone">Error</h1>
        <p>Sorry, you are not authorized to have access to delete the file</p>
      </div>
    </Notification>
  )

  const warningNotification = () => (
    <Notification>
      <MdWarning className="iconw" />
      <div className="text-status">
        <h1 className="iconw">Warning</h1>
        <p>Viewers of this file can see comments and suggestions</p>
      </div>
    </Notification>
  )

  const infoNotification = () => (
    <Notification>
      <MdInfo className="iconi" />
      <div className="text-status">
        <h1 className="iconi">Info</h1>
        <p>Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )

  return (
    <div className="status">
      <h1>Alert Notifications</h1>
      {successNotification()}
      {errorNotification()}
      {warningNotification()}
      {infoNotification()}
    </div>
  )
}
export default AlertNotifications
