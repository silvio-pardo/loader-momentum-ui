import * as React from 'react';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { LoaderProps, LoaderStatus } from './loader.types';
import { Subscription } from 'rxjs';
import './loader.css';
export const FireLoader = new BehaviorSubject<boolean>(false);
// global subscription to avoid infinite subscribe
let currentSubscriptionLoader: Subscription;
export const Loader: React.FC<LoaderProps> = (props: LoaderProps) => {
  const [statusComponent, setComponent] = React.useState({
    isDisplayed: false,
  } as LoaderStatus);
  // subscription services
  if (currentSubscriptionLoader === undefined) {
    currentSubscriptionLoader = FireLoader.subscribe((next) => {
      setComponent((prevState) => {
        return { ...prevState, isDisplayed: next };
      });
    });
  }
  return (
    <div
      className={
        'loader_background' +
        (statusComponent.isDisplayed ? ' show_cisco_bg' : '')
      }
    >
      <div
        className={
          'loader_base_container' +
          (statusComponent.isDisplayed ? ' show_cisco_loader' : '')
        }
      >
        <i className={'md-spinner md-spinner--36 md-spinner--' + props.color} />
      </div>
    </div>
  );
};
