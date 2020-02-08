import React, { useContext, useEffect, Fragment } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { GithubContext } from '../context/github/githubContext'
import { Repos } from '../components/Repos'


const Profile = () => {
    const { getUser, getRepos, loading, user, repos } = useContext(GithubContext)
    const urlName = useRouteMatch().params.name

    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <p className='text-center'>Downloading...</p>
    }

    const {
        name, compnay, avatar_url,
        location, bio, blog, login,
        html_url, followers, following,
        public_repos, public_gists

    } = user
    return (
        <Fragment>
            <Link to='/' className='btn btn-link'>To Home</Link>
            <div className='card mb-4'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-sm-3 text-center'>
                            <img
                                src={avatar_url}
                                alt={name}
                                style={{ width: '150px' }}
                            />
                            <h1>{name}</h1>
                            {location && <p>Location: {location}</p>}
                        </div>
                        <div className='col'>
                            {
                                bio && <Fragment>
                                    <h3>Bio</h3>
                                    <p>{bio}</p>
                                </Fragment>
                            }

                            <a
                                href={html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='btn btn-dark'
                            >Open Profile</a>
                            <ul>
                                {login && <li>
                                    <strong>UserName: </strong> {login}
                                </li>}
                                {compnay && <li>
                                    <strong>Compnay: </strong> {compnay}
                                </li>}
                                {blog && <li>
                                    <strong>Blog: </strong> {blog}
                                </li>}
                            </ul>

                            <div className='badge badge-primary'>Folowers:{followers}</div>
                            <div className='badge badge-success'>Following:{following}</div>
                            <div className='badge badge-info'>Repositories:{public_repos}</div>
                            <div className='badge badge de-dark'>Gists:{public_gists}</div>

                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos} />
        </Fragment>
    )
}

export default Profile