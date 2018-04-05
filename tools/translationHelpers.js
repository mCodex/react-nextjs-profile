/* global fetch */
import 'isomorphic-unfetch';

/**
 * Fetch translation file(s).
 * @function getTranslation
 * @param {string} lang - Language to fetch.
 * @param {array} files - Translation files to fetch.
 * @param {string} baseUrl - Locale location.
 * @return {object} Fetched translation files.
 */
export default async function getTranslation(lang, files, baseUrl) {
  const translation = {};

  for (const file of files) {
    const response = await fetch(`${baseUrl}${lang}/${file}.json`); //eslint-disable-line
    translation[file] = await response.json(); //eslint-disable-line
  }

  return { [lang]: translation };
}
