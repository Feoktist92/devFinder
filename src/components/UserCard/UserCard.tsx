import { UserStat } from 'components/UserStat';
import { LocalGithubUser } from 'types';
import { UserTitle } from 'components/UserTitle';
import styles from './UserCard.module.scss';
import { UserInfo } from 'components/UserInfo';

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
    return (
        <div className={styles.userCard}>
            <img
                src={props.avatar}
                alt={props.login}
                className={styles.avatar}
            />
            <UserTitle
                created={props.created}
                name={props.name}
                login={props.login}
            />
            <p
                className={`${styles.bio}${
                    props.bio ? '' : ` ${styles.empty}`
                }`}
            >
                {props.bio ? props.bio : 'This profile has no bio'}
            </p>
            <UserStat
                repos={props.repos}
                following={props.following}
                followers={props.followers}
            />
            <UserInfo
                blog={props.blog}
                company={props.company}
                location={props.location}
                twitter={props.twitter}
            />
        </div>
    );
};
