import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import useGoogleSearch from '../../useGoogleSearch';
import Search from '../Search/Search';
import './SearchPage.css';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageICon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    // // https"//developers.google.com/custom-search/v1/using_rest
    // https://cse.google.com/cse/create/new

    // const data = Response;

    console.log(data)
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
                </Link>

                <div className="searchPage__headerBody">
                    <Search hideButtons />

                    <div className="searchPage__options">
                        <div className="searchPage__optionLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/all">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageICon />
                                <Link to="/all">Image</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/all">Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/all">Maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/all">more</Link>
                            </div>
                        </div>

                        <div className="searchPage__optionRight">
                            <div className="searchPage__option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to="tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {true && (
                <div className="searchPage__result">
                    <div className="searchPage__resultCount">
                        <p style={{ marginLeft: '240px', marginBottom: '40px' }}>About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for {term}</p>

                        {data?.items.map(item => (
                            <div className="searchPage__results">
                                <a className="searchPage__result" href={item.link}>
                                    {/* {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse__image[0]?.src && (
                                        < img className="searchPage__resultImage" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse__image[0]?.src} alt="" />)} */}
                                    {item.displayLink}
                                </a>
                                <a className="searchPage__resultTitle" href={item.link}>
                                    <h2>{item.title}</h2>
                                </a>
                                <p className="saerchPage__resultSnippet">{item.snippet}
                                </p>

                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default SearchPage;
