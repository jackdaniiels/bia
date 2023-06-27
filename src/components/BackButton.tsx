import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import styles from '@/theme/components/backbutton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { darkmodeContext } from '@/context/darkmode';

const BackButton = () => {
    const darkmode = useContext(darkmodeContext);
    const router = useRouter();
    const handleBack = () => {
        router.push(`/home`);
        // router.back();
    };

    return (
        <button className={styles.backButton}
            onClick={handleBack}
            data-theme={darkmode.activeDarkMode ? 'dark' : ''}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
        </button>
    )
}

export default BackButton;