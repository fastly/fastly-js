/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import DictionaryItemResponse from '../model/DictionaryItemResponse';
import InlineResponse200 from '../model/InlineResponse200';

/**
* DictionaryItem service.
* @module api/DictionaryItemApi
* @version 3.0.0-beta3
*/
export default class DictionaryItemApi {

    /**
    * Constructs a new DictionaryItemApi. 
    * @alias module:api/DictionaryItemApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;

        if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
            this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
        }
    }


    /**
     * Create DictionaryItem given service, dictionary ID, item key, and item value.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.dictionary_id - Alphanumeric string identifying a Dictionary.
     * @param {String} [options.item_key] - Item key, maximum 256 characters.
     * @param {String} [options.item_value] - Item value, maximum 8000 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DictionaryItemResponse} and HTTP response
     */
    createDictionaryItemWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'dictionary_id' is set.
      if (options['dictionary_id'] === undefined || options['dictionary_id'] === null) {
        throw new Error("Missing the required parameter 'dictionary_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'dictionary_id': options['dictionary_id']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'item_key': options['item_key'],
        'item_value': options['item_value']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = DictionaryItemResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/dictionary/{dictionary_id}/item', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create DictionaryItem given service, dictionary ID, item key, and item value.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.dictionary_id - Alphanumeric string identifying a Dictionary.
     * @param {String} [options.item_key] - Item key, maximum 256 characters.
     * @param {String} [options.item_value] - Item value, maximum 8000 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DictionaryItemResponse}
     */
    createDictionaryItem(options = {}) {
      return this.createDictionaryItemWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete DictionaryItem given service, dictionary ID, and item key.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.dictionary_id - Alphanumeric string identifying a Dictionary.
     * @param {String} options.dictionary_item_key - Item key, maximum 256 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteDictionaryItemWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'dictionary_id' is set.
      if (options['dictionary_id'] === undefined || options['dictionary_id'] === null) {
        throw new Error("Missing the required parameter 'dictionary_id'.");
      }
      // Verify the required parameter 'dictionary_item_key' is set.
      if (options['dictionary_item_key'] === undefined || options['dictionary_item_key'] === null) {
        throw new Error("Missing the required parameter 'dictionary_item_key'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'dictionary_id': options['dictionary_id'],
        'dictionary_item_key': options['dictionary_item_key']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete DictionaryItem given service, dictionary ID, and item key.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.dictionary_id - Alphanumeric string identifying a Dictionary.
     * @param {String} options.dictionary_item_key - Item key, maximum 256 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteDictionaryItem(options = {}) {
      return this.deleteDictionaryItemWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieve a single DictionaryItem given service, dictionary ID and item key.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.dictionary_id - Alphanumeric string identifying a Dictionary.
     * @param {String} options.dictionary_item_key - Item key, maximum 256 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DictionaryItemResponse} and HTTP response
     */
    getDictionaryItemWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'dictionary_id' is set.
      if (options['dictionary_id'] === undefined || options['dictionary_id'] === null) {
        throw new Error("Missing the required parameter 'dictionary_id'.");
      }
      // Verify the required parameter 'dictionary_item_key' is set.
      if (options['dictionary_item_key'] === undefined || options['dictionary_item_key'] === null) {
        throw new Error("Missing the required parameter 'dictionary_item_key'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'dictionary_id': options['dictionary_id'],
        'dictionary_item_key': options['dictionary_item_key']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DictionaryItemResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a single DictionaryItem given service, dictionary ID and item key.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.dictionary_id - Alphanumeric string identifying a Dictionary.
     * @param {String} options.dictionary_item_key - Item key, maximum 256 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DictionaryItemResponse}
     */
    getDictionaryItem(options = {}) {
      return this.getDictionaryItemWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List of DictionaryItems given service and dictionary ID.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.dictionary_id - Alphanumeric string identifying a Dictionary.
     * @param {Number} [options.page] - Current page.
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {String} [options.sort='created'] - Field on which to sort.
     * @param {module:model/String} [options.direction='ascend'] - Direction in which to sort results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DictionaryItemResponse>} and HTTP response
     */
    listDictionaryItemsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'dictionary_id' is set.
      if (options['dictionary_id'] === undefined || options['dictionary_id'] === null) {
        throw new Error("Missing the required parameter 'dictionary_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'dictionary_id': options['dictionary_id']
      };
      let queryParams = {
        'page': options['page'],
        'per_page': options['per_page'],
        'sort': options['sort'],
        'direction': options['direction']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DictionaryItemResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/dictionary/{dictionary_id}/items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List of DictionaryItems given service and dictionary ID.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.dictionary_id - Alphanumeric string identifying a Dictionary.
     * @param {Number} [options.page] - Current page.
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {String} [options.sort='created'] - Field on which to sort.
     * @param {module:model/String} [options.direction='ascend'] - Direction in which to sort results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DictionaryItemResponse>}
     */
    listDictionaryItems(options = {}) {
      return this.listDictionaryItemsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update DictionaryItem given service, dictionary ID, item key, and item value.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.dictionary_id - Alphanumeric string identifying a Dictionary.
     * @param {String} options.dictionary_item_key - Item key, maximum 256 characters.
     * @param {String} [options.item_key] - Item key, maximum 256 characters.
     * @param {String} [options.item_value] - Item value, maximum 8000 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DictionaryItemResponse} and HTTP response
     */
    updateDictionaryItemWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'dictionary_id' is set.
      if (options['dictionary_id'] === undefined || options['dictionary_id'] === null) {
        throw new Error("Missing the required parameter 'dictionary_id'.");
      }
      // Verify the required parameter 'dictionary_item_key' is set.
      if (options['dictionary_item_key'] === undefined || options['dictionary_item_key'] === null) {
        throw new Error("Missing the required parameter 'dictionary_item_key'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'dictionary_id': options['dictionary_id'],
        'dictionary_item_key': options['dictionary_item_key']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'item_key': options['item_key'],
        'item_value': options['item_value']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = DictionaryItemResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update DictionaryItem given service, dictionary ID, item key, and item value.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.dictionary_id - Alphanumeric string identifying a Dictionary.
     * @param {String} options.dictionary_item_key - Item key, maximum 256 characters.
     * @param {String} [options.item_key] - Item key, maximum 256 characters.
     * @param {String} [options.item_value] - Item value, maximum 8000 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DictionaryItemResponse}
     */
    updateDictionaryItem(options = {}) {
      return this.updateDictionaryItemWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Upsert DictionaryItem given service, dictionary ID, item key, and item value.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.dictionary_id - Alphanumeric string identifying a Dictionary.
     * @param {String} options.dictionary_item_key - Item key, maximum 256 characters.
     * @param {String} [options.item_key] - Item key, maximum 256 characters.
     * @param {String} [options.item_value] - Item value, maximum 8000 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DictionaryItemResponse} and HTTP response
     */
    upsertDictionaryItemWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'dictionary_id' is set.
      if (options['dictionary_id'] === undefined || options['dictionary_id'] === null) {
        throw new Error("Missing the required parameter 'dictionary_id'.");
      }
      // Verify the required parameter 'dictionary_item_key' is set.
      if (options['dictionary_item_key'] === undefined || options['dictionary_item_key'] === null) {
        throw new Error("Missing the required parameter 'dictionary_item_key'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'dictionary_id': options['dictionary_id'],
        'dictionary_item_key': options['dictionary_item_key']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'item_key': options['item_key'],
        'item_value': options['item_value']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = DictionaryItemResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Upsert DictionaryItem given service, dictionary ID, item key, and item value.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.dictionary_id - Alphanumeric string identifying a Dictionary.
     * @param {String} options.dictionary_item_key - Item key, maximum 256 characters.
     * @param {String} [options.item_key] - Item key, maximum 256 characters.
     * @param {String} [options.item_value] - Item value, maximum 8000 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DictionaryItemResponse}
     */
    upsertDictionaryItem(options = {}) {
      return this.upsertDictionaryItemWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
