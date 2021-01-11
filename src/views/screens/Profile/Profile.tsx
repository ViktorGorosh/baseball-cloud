import React from "react";
import {Form} from 'react-final-form'
import {useSelector} from "react-redux";
import {ProfileInput} from "views/components/ProfileInput";
import {ProfileSelect} from "views/components/ProfileSelect";
import {ProfileTextarea} from "views/components/ProfileTextarea";
import {selectProfile} from "state/ducks/profile";
import styles from './Profile.module.scss'

const Profile = () => {

  const profile = useSelector(selectProfile)

  const onSaveChanges = (values: any) => {
    console.log(values)
  }

  return (
    <aside className={'profileSidebar'}>
      <Form
        onSubmit={onSaveChanges}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="userInfo">
              <div className={styles.avatarContainer}>
                <div className={styles.avatarBox}>
                  <div
                    className={styles.avatar}
                    style={{backgroundImage: profile.avatar ? `url(${profile.avatar})` : "unset"}}
                  />
                </div>
                <div className={styles.choosePhotoContainer}>
                  <label>Choose Photo</label>
                </div>
              </div>
            </div>
            <div className={styles.inputContainer + ' ' + styles.twoInputs}>
              <ProfileInput name={'first_name'} value={profile.first_name} placeholder={'First name'}/>
              <ProfileInput name={"last_name"} value={profile.last_name} placeholder={'Last name'}/>
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
              <ProfileInput name={'age'} value={profile.age} placeholder={'Age'}/>
            </div>
            <div className={styles.inputContainer + ' ' + styles.twoInputs}>
              <ProfileInput name={'feet'} value={profile.feet} placeholder={'Feet'}/>
              <ProfileInput name={'inches'} value={profile.inches} placeholder={'Inches'}/>
            </div>
            <div className={styles.inputContainer}>
              <ProfileInput name={'weight'} value={profile.weight} placeholder={'Weight'}/>
            </div>
            <div className={styles.inputContainer + ' ' + styles.twoInputs}>
              <ProfileSelect name={"throws_hand"} placeholder={'Throw hand'}/>
              <ProfileSelect name={'bats_hand'} placeholder={'Bats hand'}/>
            </div>
            <div className={styles.sectionTitleContainer}>
              <div className={styles.sectionTitle}>School</div>
            </div>
            <div className={styles.inputContainer}>
              <ProfileSelect name={'school'} placeholder={'School'}/>
            </div>
            <div className={styles.inputContainer}>
              <ProfileSelect name={'school_year'} placeholder={'School Year'}/>
            </div>
            <div className={styles.inputContainer}>
              <ProfileSelect name={'teams'} placeholder={'Teams'}/>
            </div>
            <div className={styles.sectionTitleContainer}>
              <div className={styles.sectionTitle}>About</div>
            </div>
            <div className={styles.inputContainer}>
              <ProfileTextarea
                name={"teams"}
                placeholder={'Describe yourself in a few words...'}
                value={profile.biography}
              />
            </div>
            <div className='d-flex'>
              <button type='button' className={styles.cancel}>Cancel</button>
              <button type='submit' className={styles.submit}>Save</button>
            </div>
          </form>
        )}
      />
    </aside>
  )
}

export default Profile
