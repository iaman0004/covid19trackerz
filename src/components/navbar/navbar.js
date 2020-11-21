import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [active, setActive] = useState('home');

	useEffect(() => {
		setActive(window.location.pathname);
	}, []);

	return (
		<div className='nav-bar'>
			<div className='row pure-menu pure-menu-horizontal'>
				<div className='col-md-4 col-sm-12'>
					<div className='wrapper'>
						<table>
							<tbody>
								<tr>
									<td className='bar-1 logo-txt' colSpan='3'></td>
									<td rowSpan='3' className='txt logo-txt'>
										covid<span className='nine'>19</span>TRACKERZ
									</td>
								</tr>
								<tr>
									<td className='left-bar-3 logo-txt'></td>
									<td className='bar-1 logo-txt' colSpan='2'></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className='col-md-8 col-sm-12 right'>
					<ul className='pure-menu-list' id='dropdown-click'>
						<li className='pure-menu-item'>
							<Link to='/' className={'pure-menu-link' + (active === '/' ? ' active' : '')} onClick={() => setActive('/')}>
								<i className='fas fa-home'></i>
							</Link>
						</li>
						<li className='pure-menu-item'>
							<Link to='/india' className={'pure-menu-link' + (active === '/india' ? ' active' : '')} onClick={() => setActive('/india')}>
								India
							</Link>
						</li>
						<li className='pure-menu-item'>
							<Link to='/faq' className={'pure-menu-link' + (active === '/faq' ? ' active' : '')} onClick={() => setActive('/faq')}>
								<i className='fas fa-question-circle' />
							</Link>
						</li>
						<li className='pure-menu-item'>
							<a href='https://www.github.com/iaman0004/covid19trackerz' target='_top' className='pure-menu-link'>
								<i className='fab fa-github'></i>
							</a>
						</li>
						<li className='pure-menu-item'>
							<a href='mailto:iak.sharma0004@gmail.com' className='pure-menu-link'>
								<i className='fas fa-envelope-open'></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
