import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { Photo, ProfileBox } from '../components';
import * as Icons from '../components/icons';

export default {
  title: 'Icons',
  decorators: [withKnobs],
};

export const Icon = () => {
  const darkMode = boolean('Dark Mode', false);
  const backgroundColor = darkMode ? 'black' : 'white';
  const color = darkMode ? 'white' : 'black';

  return (
    <div className="icons" style={{ backgroundColor, color }}>
      <Icons.ArrowBottom />
      <Icons.Bookmark />
      <Icons.BookmarkFill />
      <Icons.Close />
      <Icons.Emoji />
      <Icons.Explore />
      <Icons.ExplorerFill />
      <Icons.Gif />
      <Icons.Home />
      <Icons.HomeFill />
      <Icons.Like />
      <Icons.Lists />
      <Icons.ListsFill />
      <Icons.Media />
      <Icons.Messages />
      <Icons.MessagesFill />
      <Icons.More />
      <Icons.Notification />
      <Icons.NotificationFill />
      <Icons.Options />
      <Icons.Profile />
      <Icons.ProfileFill />
      <Icons.Question />
      <Icons.Reply />
      <Icons.Retweet />
      <Icons.Search />
      <Icons.Share />
      <Icons.TimelineProp />
      <Icons.Tweet />
      <Icons.Twitter />
    </div>
  );
};

export const ProfilePhoto = () => <Photo />;

export const Box = () => <ProfileBox />;
