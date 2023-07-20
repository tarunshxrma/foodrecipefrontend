import React from 'react'
import './MainComponentsCss.css'
import Navbar from './Navbar'
import HomePageBannerImage1 from '../Assets/HomePage/home-page-banner-image1.webp'
import HomePageBannerImage2 from '../Assets/HomePage/home-page-banner-image2.webp'
import HomePageFreshFromOurCommunityAvatarImage1 from '../Assets/HomePage/home-page-fresh-from-our-community-avatar-image1.webp'
import HomePageFreshFromOurCommunityAvatarImage2 from '../Assets/HomePage/home-page-fresh-from-our-community-avatar-image2.jpeg'
import HomePageFreshFromOurCommunityAvatarImage3 from '../Assets/HomePage/home-page-fresh-from-our-community-avatar-image3.jpg'
import HomePageFreshFromOurCommunityImage1 from '../Assets/HomePage/home-page-fresh-from-our-community-image1.webp'
import HomePageWhatWereCravingImage1 from '../Assets/HomePage/home-page-what-were-craving-image1.webp'
import HomePageWhatWereCravingImage2 from '../Assets/HomePage/home-page-what-were-craving-image2.webp'
import HomePageWhatWereCravingImage3 from '../Assets/HomePage/home-page-what-were-craving-image3.webp'
import HomePageExploreMoreImage1 from '../Assets/HomePage/home-page-explore-more-image1.webp'
import HomePageExploreMoreImage2 from '../Assets/HomePage/home-page-explore-more-image2.webp'
import HomePageExploreMoreImage3 from '../Assets/HomePage/home-page-explore-more-image3.webp'
import HomePageExploreMoreImage4 from '../Assets/HomePage/home-page-explore-more-image4.webp'
import HomePageExploreMoreImage5 from '../Assets/HomePage/home-page-explore-more-image5.webp'
import HomePageExploreMoreImage6 from '../Assets/HomePage/home-page-explore-more-image6.webp'
import HomePageTrendingImage1 from '../Assets/HomePage/home-page-trending-now-image1.webp'
import HomePageTrendingImage2 from '../Assets/HomePage/home-page-trending-now-image2.webp'
import HomePageTrendingImage3 from '../Assets/HomePage/home-page-trending-now-image3.webp'
import HomePageTrendingImage4 from '../Assets/HomePage/home-page-trending-now-image4.webp'
import HomePageDontMissImage1 from '../Assets/HomePage/home-page-dont-miss-image1.webp'
import HomePageDontMissImage2 from '../Assets/HomePage/home-page-dont-miss-image2.webp'
import HomePageDontMissImage3 from '../Assets/HomePage/home-page-dont-miss-image3.webp'
import HomePageMoreIdeasImage1 from '../Assets/HomePage/home-page-more-ideas-image1.webp'
import HomePageMoreIdeasImage2 from '../Assets/HomePage/home-page-more-ideas-image2.webp'
import HomePageMoreIdeasImage3 from '../Assets/HomePage/home-page-more-ideas-image3.webp'
import HomePageMoreIdeasImage4 from '../Assets/HomePage/home-page-more-ideas-image4.webp'
import HomePageFanFavouritesImage1 from '../Assets/HomePage/home-page-fan-favourites-image1.webp'
import HomePageFanFavouritesImage2 from '../Assets/HomePage/home-page-fan-favourites-image2.webp'
import HomePageFanFavouritesImage3 from '../Assets/HomePage/home-page-fan-favourites-image3.webp'
import HomePageFanFavouritesImage4 from '../Assets/HomePage/home-page-fan-favourites-image4.webp'
import HomePageFanFavouritesImage5 from '../Assets/HomePage/home-page-fan-favourites-image5.webp'
import HomePageFanFavouritesImage6 from '../Assets/HomePage/home-page-fan-favourites-image6.webp'
import HomePageFanFavouritesImage7 from '../Assets/HomePage/home-page-fan-favourites-image7.webp'
import HomePageFanFavouritesImage8 from '../Assets/HomePage/home-page-fan-favourites-image8.webp'
import HomePageFanFavouritesImage9 from '../Assets/HomePage/home-page-fan-favourites-image9.webp'
import HomePageFanFavouritesImage10 from '../Assets/HomePage/home-page-fan-favourites-image10.webp'
import HomePageFanFavouritesImage11 from '../Assets/HomePage/home-page-fan-favourites-image11.webp'
import HomePageFanFavouritesImage12 from '../Assets/HomePage/home-page-fan-favourites-image12.webp'
import HomePageFanFavouritesImage13 from '../Assets/HomePage/home-page-fan-favourites-image13.webp'
import HomePageFanFavouritesImage14 from '../Assets/HomePage/home-page-fan-favourites-image14.webp'
import HomePageFanFavouritesImage15 from '../Assets/HomePage/home-page-fan-favourites-image15.webp'
import HomePageFanFavouritesImage16 from '../Assets/HomePage/home-page-fan-favourites-image16.webp'
import { FiHeart } from 'react-icons/fi'
import FindMoreRecipes from './FindMoreRecipes'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div id='home-page'>
                <div id='home-page-container'>
                    <div id='home-page-banner-image1-container'>
                        <img src={HomePageBannerImage1} alt='home-page-banner' id='home-page-banner-image1'></img>
                    </div>
                    <div id='home-page-banner-image1-text-and-button'>
                        <h2>GRILLED CHICKEN <br /> RECIPES</h2>
                        <button onClick={() => navigate('/recipes/chicken')}>SEE THEM ALL</button>
                    </div>
                    <hr />
                    <div id='home-page-fresh-from-our-community'>
                        <h2>FRESH FROM OUR COMMUNITY</h2>
                        <div id='home-page-fresh-from-our-community-cards-container'>
                            <div className='home-page-fresh-from-our-community-cards'>
                                <div className='home-page-fresh-from-our-community-cards-image-text'>
                                    <img src={HomePageFreshFromOurCommunityAvatarImage1} alt='avatar'></img>
                                    <h4>providentecopolitanflats asked a question about Birria</h4>
                                </div>
                                <p className='home-page-fresh-from-our-community-cards-review'>nice loved it</p>
                                <div className='home-page-fresh-from-our-community-cards-time-reply'>
                                    <p>59 MINUTES AGO</p>
                                    <p>REPLY <FiHeart className='home-page-fresh-from-our-community-cards-time-reply-heart' /></p>
                                </div>
                            </div>
                            <div className='home-page-fresh-from-our-community-cards'>
                                <div className='home-page-fresh-from-our-community-cards-image-text'>
                                    <img src={HomePageFreshFromOurCommunityAvatarImage2} alt='avatar'></img>
                                    <h4>Lily R. reviewed Thai Noodles With Spicy Peanut Sauce</h4>
                                </div>
                                <p className='home-page-fresh-from-our-community-cards-review'>Always delicious. 2nd time I've made this.<br /> It's a treat hot, warm, or cold</p>
                                <div className='home-page-fresh-from-our-community-cards-time-reply'>
                                    <p>5 HOURS AGO</p>
                                    <p>REPLY <FiHeart className='home-page-fresh-from-our-community-cards-time-reply-heart' /></p>
                                </div>
                            </div>
                            <div className='home-page-fresh-from-our-community-cards'>
                                <div className='home-page-fresh-from-our-community-cards-image-text'>
                                    <img src={HomePageFreshFromOurCommunityAvatarImage3} alt='avatar'></img>
                                    <h4>pate g. added a photo to Salted Peanut Chews</h4>
                                </div>
                                <img src={HomePageFreshFromOurCommunityImage1} alt='' id='home-page-fresh-from-our-community-cards-image1'></img>
                                <div className='home-page-fresh-from-our-community-cards-time-reply'>
                                    <p>11 HOURS AGO</p>
                                    <p>REPLY <FiHeart className='home-page-fresh-from-our-community-cards-time-reply-heart' /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='home-page-what-were-craving'>
                        <h2>WHAT WE'RE CRAVING</h2>
                        <div id='home-page-what-were-craving-container'>
                            <Link to='/recipes/trending now'>
                                <div>
                                    <div className='home-page-what-were-craving-image-container'>
                                        <img src={HomePageWhatWereCravingImage1} alt=''></img>
                                    </div>
                                    <h5>COLLECTION</h5>
                                    <h3>FREEZER-FRIENDLY <br /> MEALS</h3>
                                </div>
                            </Link>
                            <Link to='/recipes/lunch'>
                                <div>
                                    <div className='home-page-what-were-craving-image-container'>
                                        <img src={HomePageWhatWereCravingImage2} alt=''></img>
                                    </div>
                                    <h5>COLLECTION</h5>
                                    <h3>LUNCH IDEAS FOR <br /> KIDS</h3>
                                </div>
                            </Link>
                            <Link to='/recipes/healthy'>
                                <div>
                                    <div className='home-page-what-were-craving-image-container' s>
                                        <img src={HomePageWhatWereCravingImage3} alt=''></img>
                                    </div>
                                    <h5>COLLECTION</h5>
                                    <h3>BEST CORN <br /> RECIPES</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div id='home-page-explore-more'>
                        <h2>EXPLORE MORE</h2>
                        <div id='home-page-explore-more-container'>
                            <Link to='/recipes/grilling and bbq'>
                                <div>
                                    <img src={HomePageExploreMoreImage1} alt=''></img>
                                    <h4>GRILLING & BBQ</h4>
                                </div>
                            </Link>
                            <Link to='/recipes/mexican'>
                                <div>
                                    <img src={HomePageExploreMoreImage2} alt=''></img>
                                    <h4>INTERNATIONAL <br /> EATS</h4>
                                </div>
                            </Link>
                            <Link to='/recipes/breakfast and brunch'>
                                <div>
                                    <img src={HomePageExploreMoreImage3} alt=''></img>
                                    <h4>BREAKFAST & <br /> BRUNCH</h4>
                                </div>
                            </Link>
                            <Link to='/recipes/summer'>
                                <div>
                                    <img src={HomePageExploreMoreImage4} alt=''></img>
                                    <h4>COMMUNITY PICKS</h4>
                                </div>
                            </Link>
                            <Link to='/recipes/bread'>
                                <div>
                                    <img src={HomePageExploreMoreImage5} alt=''></img>
                                    <h4>QUICK & EASY</h4>
                                </div>
                            </Link>
                            <Link to='/recipes/desert'>
                                <div>
                                    <img src={HomePageExploreMoreImage6} alt=''></img>
                                    <h4>COPYCAT RECIPES</h4>
                                </div>
                            </Link>
                        </div>
                        <hr />
                        <div id='home-page-trending-now'>
                            <h2>TRENDING NOW</h2>
                            <div id='home-page-trending-now-container'>
                                <div>
                                    <img src={HomePageTrendingImage1} alt=''></img>
                                    <h3>PINEAPPLE ZUCCHINI <br /> BREAD</h3>
                                </div>
                                <div>
                                    <img src={HomePageTrendingImage2} alt=''></img>
                                    <h3>SPICY BROCCOLI- <br /> CHEDDAR SOUP</h3>
                                </div>
                                <div>
                                    <img src={HomePageTrendingImage3} alt=''></img>
                                    <h3>QUICK & EASY CHICKEN <br /> ENCHILADAS</h3>
                                </div>
                                <div>
                                    <img src={HomePageTrendingImage4} alt=''></img>
                                    <h3>GLUTEN-FREE LEMONADE <br /> SCONES</h3>
                                </div>
                            </div>
                        </div>
                        <div id='home-page-dont-miss'>
                            <h2>DON'T MISS</h2>
                            <div id='home-page-dont-miss-container'>
                                <div>
                                    <div className='home-page-dont-miss-image-container'>
                                        <img src={HomePageDontMissImage1} alt=''></img>
                                    </div>
                                    <h5>COLLECTION</h5>
                                    <h3>45 SUMMER SALADS</h3>
                                </div>
                                <div>
                                    <div className='home-page-dont-miss-image-container'>
                                        <img src={HomePageDontMissImage2} alt=''></img>
                                    </div>
                                    <h5>COLLECTION</h5>
                                    <h3>59 COOL CUCUMBER <br /> RECIPES</h3>
                                </div>
                                <div>
                                    <div className='home-page-dont-miss-image-container'>
                                        <img src={HomePageDontMissImage3} alt=''></img>
                                    </div>
                                    <h5>COLLECTION</h5>
                                    <h3>35 EASY ONE-POT <br /> MEALS</h3>
                                </div>
                            </div>
                        </div>
                        <div id='home-page-more-ideas'>
                            <h2>MORE IDEAS</h2>
                            <div id='home-page-more-ideas-container'>
                                <div >
                                    <img src={HomePageMoreIdeasImage1} alt=''></img>
                                    <h3>CHICKEN TIKKA <br /> MASALA</h3>
                                </div>
                                <div >
                                    <img src={HomePageMoreIdeasImage2} alt=''></img>
                                    <h3>VEGAN BACON</h3>
                                </div>
                                <div >
                                    <img src={HomePageMoreIdeasImage3} alt=''></img>
                                    <h3>COPYCAT MCDONALD'S <br /> BIG MAC SAUCE</h3>
                                </div>
                                <div >
                                    <img src={HomePageMoreIdeasImage4} alt=''></img>
                                    <h3>DIRTY SHRIMP IN <br /> BUTTER-BEER SAUCE</h3>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div id='home-page-banner-image2-container'>
                            <img src={HomePageBannerImage2} alt=''></img>
                            <div>
                                <h5>COLLECTION</h5>
                                <h3>HOW TO PEEL PEACHES, <br /> 3 WAYS</h3>
                                <p>There’s more than one way to peel a <br /> peach! Here are three ways to get the <br /> job done.</p>
                            </div>
                        </div>
                        <div id='home-page-fan-favourites'>
                            <h2>FAN FAVOURITES</h2>
                            <div id='home-page-fan-favourites-container'>
                                <div>
                                    <img src={HomePageFanFavouritesImage1} alt=''></img>
                                    <h3>OVEN-BAKED RIBS</h3>
                                </div>
                                <div>
                                    <img src={HomePageFanFavouritesImage2} alt=''></img>
                                    <h3>MOZZARELLA STICKS</h3>
                                </div>
                                <div>
                                    <img src={HomePageFanFavouritesImage3} alt=''></img>
                                    <h3>TURKEY MEATLOAF</h3>
                                </div>
                                <div>
                                    <img src={HomePageFanFavouritesImage4} alt=''></img>
                                    <h3>LEFTOVER MASHED <br /> POTATO PANCAKES</h3>
                                </div>
                                <div>
                                    <img src={HomePageFanFavouritesImage5} alt=''></img>
                                    <h3>SIMPLE OVEN-BAKED <br /> SEA BASS</h3>
                                </div>
                                <div>
                                    <img src={HomePageFanFavouritesImage6} alt=''></img>
                                    <h3>BEEF & BROCCOLI STIR- <br /> FRY</h3>
                                </div>
                                <div>
                                    <img src={HomePageFanFavouritesImage7} alt=''></img>
                                    <h3>FAJITAS</h3>
                                </div>
                                <div>
                                    <img src={HomePageFanFavouritesImage8} alt=''></img>
                                    <h3>WHIPPED CREAM <br /> FROSTING</h3>
                                </div>
                                <div>
                                    <img src={HomePageFanFavouritesImage9} alt=''></img>
                                    <h3>RESTAURANT TERIYAKI<br /> SAUCE</h3>
                                </div>
                                <div>
                                    <img src={HomePageFanFavouritesImage10} alt=''></img>
                                    <h3>SKYLINE CHILI</h3>
                                </div>
                                <div>
                                    <img src={HomePageFanFavouritesImage11} alt=''></img>
                                    <h3>BANANA NUT BREAD</h3>
                                </div>
                                <div>
                                    <img src={HomePageFanFavouritesImage12} alt=''></img>
                                    <h3>AWARD WINNING CHILI</h3>
                                </div>
                                <div>
                                    <img src={HomePageFanFavouritesImage13} alt=''></img>
                                    <h3>THE BEST BELGIAN <br /> WAFFLES</h3>
                                </div>
                                <div>
                                    <img src={HomePageFanFavouritesImage14} alt=''></img>
                                    <h3>BROILED STEAK</h3>
                                </div>
                                <div>
                                    <img src={HomePageFanFavouritesImage15} alt=''></img>
                                    <h3>OVEN CRISP CHICKEN <br /> WINGS</h3>
                                </div>
                                <div>
                                    <img src={HomePageFanFavouritesImage16} alt=''></img>
                                    <h3>PERFECT RUMP ROAST</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <FindMoreRecipes />
            <Footer />
        </>
    )
}

export default Home