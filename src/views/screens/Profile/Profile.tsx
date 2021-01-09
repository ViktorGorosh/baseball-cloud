import React, {useEffect} from "react";
import {Form} from 'react-final-form'
import {useDispatch} from "react-redux";
import {ProfileInput} from "views/components/ProfileInput";
import {ProfileSelect} from "views/components/ProfileSelect";
import {ProfileTextarea} from "views/components/ProfileTextarea";
import {getCurrentProfile} from "state/ducks/profile";
import styles from './Profile.module.scss'

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
            <div className={styles.inputContainer}>
              <ProfileSelect name={'position2'} placeholder={'Secondary Position in Game'}/>
            </div>
            <div className={styles.sectionTitleContainer}>
              <div className={styles.sectionTitle}>Personal Info</div>
            </div>
            <div className={styles.inputContainer}>
              <ProfileInput name={'age'} value={'22'} placeholder={'Age'}/>
            </div>
            <div className={styles.inputContainer + ' ' + styles.twoInputs}>
              <ProfileInput name={'feet'} value={'5'} placeholder={'Feet'}/>
              <ProfileInput name={'inches'} value={'5'} placeholder={'Inches'}/>
            </div>
            <div className={styles.inputContainer}>
              <ProfileInput name={'weight'} value={'82'} placeholder={'Weight'}/>
            </div>
            <div className={styles.inputContainer + ' ' + styles.twoInputs}>
              <ProfileSelect name={'throw_hand'} placeholder={'Throw hand'}/>
              <ProfileSelect name={'bats_hand'} placeholder={'Bats hand'}/>
            </div>
            <div className={styles.sectionTitleContainer}>
              <div className={styles.sectionTitle}>School</div>
            </div>
            <div className={styles.inputContainer}>
              <ProfileSelect name={'school'} placeholder={'School'}/>
            </div>
            <div className={styles.inputContainer}>
              <ProfileSelect name={'school'} placeholder={'School'}/>
            </div>
            <div className={styles.inputContainer}>
              <ProfileSelect name={'teams'} placeholder={'Teams'}/>
            </div>
            <div className={styles.sectionTitleContainer}>
              <div className={styles.sectionTitle}>About</div>
            </div>
            <div className={styles.inputContainer}>
              <ProfileTextarea
                name={'teams'}
                placeholder={'Describe yourself in a few words...'}
                value={'Just doing my job'}
              />
            </div>
            <div className='d-flex'>
              <button type='button' className={styles.cancel}>Cancel</button>
              <button type='submit' className={styles.submit}>Cancel</button>
            </div>
          </form>
        )}
      />
    </aside>
  )
}

export default Profile
