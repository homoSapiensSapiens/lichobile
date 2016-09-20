import socket from '../../socket';
import { handleXhrError } from '../../utils';
import * as xhr from './inboxXhr';
import * as helper from '../helper';
import * as m from 'mithril';

export default function oninit(vnode) {
  helper.analyticsTrackView('Inbox');

  socket.createDefault();

  const threads = m.prop();

  xhr.inbox()
  .then(data => {
    console.log(data);
    //threads(data.messages);
    return (data);
  })
  .catch(handleXhrError);

  vnode.state = {
    threads
  };
}
