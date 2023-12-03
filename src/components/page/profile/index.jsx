import React from 'react';
import { Link } from "react-router-dom";
import './index.css'
import hero from "../../../assets/hero-image.png"
import ProfileSetupWizard from '../../atoms/ProfileSetupWizard'


const links = [
  { label: 'Website', value: 'website' },
  { label: 'Whatsapp', value: 'whatsapp' },
  { label: 'Instagram', value: 'instagram' },
  { label: 'x (Twitter)', value: 'x(twitter)' },
  { label: 'Linkedin', value: 'linkedin' },
  { label: 'Telegram', value: 'telegram' },
  { label: 'Calendly', value: 'calendly' },
  { label: 'SnapChat', value: 'snapchat' },
  { label: 'Tiktok', value: 'tiktok' },
  { label: 'Youtube', value: 'youtube' },
  { label: 'Pinterest', value: 'pinterest' },
  { label: 'Spotify', value: 'spotify' },
  { label: 'Apple Music', value: 'apple music' },
  { label: 'Resume', value: 'resume' },
  { label: 'Bank Details', value: 'bankdetails' },
  { label: 'Discord', value: 'discord' },
  { label: 'Reviews', value: 'reviews' },
  { label: 'Custom Link', value: 'customlink' },
  { label: 'Google Business Profile', value: 'googlebusinessprofile' },
];


const flavorValidation = (data, errors) => {
  if (data.icecream && data.icecream.length >= 3) {
    return {
      ...errors,
      icecream: `${data.icecream.length} is too many flavors, please select a maximum of 2 flavors.`,
    };
  }

  return errors;
};

const validateOnSubmit = (data) => {
  let errors;
  errors = flavorValidation(data, errors);
  return errors;
};

/**
 * NOT: this is not declared inline with the Select
 * If you declare inline you'll have issues with refs
 */
const CustomValueOption = ({
  children,
  ...props
}) => (
  // eslint-disable-next-line @repo/internal/react/no-unsafe-spread-props
  <components.SingleValue {...props}>
    <ColorBox color={children} /> {children}
  </components.SingleValue>
);

export default function Profile() {
  return (
    <div className='mainProfile'>
      <div className='leftSection'>
        <h1>Welcome, Lets get your card setup</h1>
        <img src={hero} alt="nfcCard" width="500px" />
        <Link to="/"><button className="affiliate-btn">Back to home</button></Link>
      </div>
      <div className='rightSection'>     
        <ProfileSetupWizard />
      </div>
    </div>
  );
}
