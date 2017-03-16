/*
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.
Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. 
You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
*/

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
 var urls = [];
var encode = function(longUrl) {
    urls.push(longUrl);
    // Get it's index and convert to a string to append to short url prefix
    return 'http://tinyurl.com/'+ (urls.length-1).toString();
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    //Get the index from shortUrl and get long url from urls
    var index = parseInt(shortUrl.substr(shortUrl.lastIndexOf('/')+1));
    return urls[index];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
