import React, {useEffect} from "react";
import {Form} from 'react-final-form'
import {useDispatch} from "react-redux";
import {ProfileInput} from "views/components/ProfileInput";
import {getCurrentProfile} from "state/ducks/profile";
import styles from './Profile.module.scss'
import {ProfileSelect} from "../../components/ProfileSelect";

const Profile = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentProfile())
  }, [dispatch])

  const onSaveChanges = (values: any) => {
    console.log(values)
  }

  return (
    <aside className={'profileSidebar'}>
      <Form
        onSubmit={onSaveChanges}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.inputContainer + ' ' + styles.twoInputs}>
              <ProfileInput name={'first_name'} value={'Viktor'} placeholder={'First name'}/>
              <ProfileInput name={'second_name'} value={'Gorosh'} placeholder={'Last name'}/>
            </div>
            <div className={styles.inputContainer}>
              <ProfileSelect name={'position'} placeholder={'Position in game'}/>
            </div>
            <button type='submit'>Save changes</button>
          </form>
        )}
      />
    </aside>
  )
}

export default Profile
