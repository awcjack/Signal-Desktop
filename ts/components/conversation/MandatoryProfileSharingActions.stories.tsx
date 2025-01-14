// Copyright 2020-2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import type { Props as MandatoryProfileSharingActionsProps } from './MandatoryProfileSharingActions';
import { MandatoryProfileSharingActions } from './MandatoryProfileSharingActions';
import { setupI18n } from '../../util/setupI18n';
import enMessages from '../../../_locales/en/messages.json';

const i18n = setupI18n('en', enMessages);

const getBaseProps = (
  isGroup = false
): MandatoryProfileSharingActionsProps => ({
  conversationId: '123',
  i18n,
  conversationType: isGroup ? 'group' : 'direct',
  firstName: text('firstName', 'Cayce'),
  title: isGroup
    ? text('title', 'NYC Rock Climbers')
    : text('title', 'Cayce Bollard'),
  acceptConversation: action('acceptConversation'),
  blockAndReportSpam: action('blockAndReportSpam'),
  blockConversation: action('blockConversation'),
  deleteConversation: action('deleteConversation'),
});

export default {
  title: 'Components/Conversation/MandatoryProfileSharingActions',
};

export function Direct(): JSX.Element {
  return (
    <div style={{ width: '480px' }}>
      <MandatoryProfileSharingActions {...getBaseProps()} />
    </div>
  );
}

export function Group(): JSX.Element {
  return (
    <div style={{ width: '480px' }}>
      <MandatoryProfileSharingActions {...getBaseProps(true)} />
    </div>
  );
}
