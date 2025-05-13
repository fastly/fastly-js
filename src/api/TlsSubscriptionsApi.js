/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import TlsSubscription from '../model/TlsSubscription';
import TlsSubscriptionResponse from '../model/TlsSubscriptionResponse';
import TlsSubscriptionsResponse from '../model/TlsSubscriptionsResponse';

/**
* TlsSubscriptions service.
* @module api/TlsSubscriptionsApi
* @version 11.0.0
*/
export default class TlsSubscriptionsApi {

    /**
    * Constructs a new TlsSubscriptionsApi. 
    * @alias module:api/TlsSubscriptionsApi
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
     * Creates an email challenge for a domain on a GlobalSign subscription. An email challenge will generate an email that can be used to validate domain ownership. If this challenge is created, then the domain can only be validated using email for the given subscription. 
     * @param {Object} options
     * @param {String} options.tls_subscription_id - Alphanumeric string identifying a TLS subscription.
     * @param {String} options.tls_authorization_id - Alphanumeric string identifying a TLS subscription.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    createGlobalsignEmailChallengeWithHttpInfo(options = {}) {
      let postBody = options['request_body'];
      // Verify the required parameter 'tls_subscription_id' is set.
      if (options['tls_subscription_id'] === undefined || options['tls_subscription_id'] === null) {
        throw new Error("Missing the required parameter 'tls_subscription_id'.");
      }
      // Verify the required parameter 'tls_authorization_id' is set.
      if (options['tls_authorization_id'] === undefined || options['tls_authorization_id'] === null) {
        throw new Error("Missing the required parameter 'tls_authorization_id'.");
      }

      let pathParams = {
        'tls_subscription_id': options['tls_subscription_id'],
        'tls_authorization_id': options['tls_authorization_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/vnd.api+json'];
      let accepts = ['application/json'];
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/tls/subscriptions/{tls_subscription_id}/authorizations/{tls_authorization_id}/globalsign_email_challenges', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Creates an email challenge for a domain on a GlobalSign subscription. An email challenge will generate an email that can be used to validate domain ownership. If this challenge is created, then the domain can only be validated using email for the given subscription. 
     * @param {Object} options
     * @param {String} options.tls_subscription_id - Alphanumeric string identifying a TLS subscription.
     * @param {String} options.tls_authorization_id - Alphanumeric string identifying a TLS subscription.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    createGlobalsignEmailChallenge(options = {}) {
      return this.createGlobalsignEmailChallengeWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Create a new TLS subscription. This response includes a list of possible challenges to verify domain ownership.
     * @param {Object} options
     * @param {Boolean} [options.force] - A flag that allows you to edit and delete a subscription with active domains. Valid to use on PATCH and DELETE actions. As a warning, removing an active domain from a subscription or forcing the deletion of a subscription may result in breaking TLS termination to that domain. 
     * @param {module:model/TlsSubscription} [options.tls_subscription]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsSubscriptionResponse} and HTTP response
     */
    createTlsSubWithHttpInfo(options = {}) {
      let postBody = options['tls_subscription'];

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'force': options['force']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/vnd.api+json'];
      let accepts = ['application/vnd.api+json'];
      let returnType = TlsSubscriptionResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/tls/subscriptions', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a new TLS subscription. This response includes a list of possible challenges to verify domain ownership.
     * @param {Object} options
     * @param {Boolean} [options.force] - A flag that allows you to edit and delete a subscription with active domains. Valid to use on PATCH and DELETE actions. As a warning, removing an active domain from a subscription or forcing the deletion of a subscription may result in breaking TLS termination to that domain. 
     * @param {module:model/TlsSubscription} [options.tls_subscription]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsSubscriptionResponse}
     */
    createTlsSub(options = {}) {
      return this.createTlsSubWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Deletes a GlobalSign email challenge. After a GlobalSign email challenge is deleted, the domain can use HTTP and DNS validation methods again.
     * @param {Object} options
     * @param {String} options.tls_subscription_id - Alphanumeric string identifying a TLS subscription.
     * @param {String} options.tls_authorization_id - Alphanumeric string identifying a TLS subscription.
     * @param {String} options.globalsign_email_challenge_id - Alphanumeric string identifying a GlobalSign email challenge.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteGlobalsignEmailChallengeWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'tls_subscription_id' is set.
      if (options['tls_subscription_id'] === undefined || options['tls_subscription_id'] === null) {
        throw new Error("Missing the required parameter 'tls_subscription_id'.");
      }
      // Verify the required parameter 'tls_authorization_id' is set.
      if (options['tls_authorization_id'] === undefined || options['tls_authorization_id'] === null) {
        throw new Error("Missing the required parameter 'tls_authorization_id'.");
      }
      // Verify the required parameter 'globalsign_email_challenge_id' is set.
      if (options['globalsign_email_challenge_id'] === undefined || options['globalsign_email_challenge_id'] === null) {
        throw new Error("Missing the required parameter 'globalsign_email_challenge_id'.");
      }

      let pathParams = {
        'tls_subscription_id': options['tls_subscription_id'],
        'tls_authorization_id': options['tls_authorization_id'],
        'globalsign_email_challenge_id': options['globalsign_email_challenge_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/tls/subscriptions/{tls_subscription_id}/authorizations/{tls_authorization_id}/globalsign_email_challenges/{globalsign_email_challenge_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Deletes a GlobalSign email challenge. After a GlobalSign email challenge is deleted, the domain can use HTTP and DNS validation methods again.
     * @param {Object} options
     * @param {String} options.tls_subscription_id - Alphanumeric string identifying a TLS subscription.
     * @param {String} options.tls_authorization_id - Alphanumeric string identifying a TLS subscription.
     * @param {String} options.globalsign_email_challenge_id - Alphanumeric string identifying a GlobalSign email challenge.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteGlobalsignEmailChallenge(options = {}) {
      return this.deleteGlobalsignEmailChallengeWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Destroy a TLS subscription. A subscription cannot be destroyed if there are domains in the TLS enabled state.
     * @param {Object} options
     * @param {String} options.tls_subscription_id - Alphanumeric string identifying a TLS subscription.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteTlsSubWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'tls_subscription_id' is set.
      if (options['tls_subscription_id'] === undefined || options['tls_subscription_id'] === null) {
        throw new Error("Missing the required parameter 'tls_subscription_id'.");
      }

      let pathParams = {
        'tls_subscription_id': options['tls_subscription_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/tls/subscriptions/{tls_subscription_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Destroy a TLS subscription. A subscription cannot be destroyed if there are domains in the TLS enabled state.
     * @param {Object} options
     * @param {String} options.tls_subscription_id - Alphanumeric string identifying a TLS subscription.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteTlsSub(options = {}) {
      return this.deleteTlsSubWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Show a TLS subscription.
     * @param {Object} options
     * @param {String} options.tls_subscription_id - Alphanumeric string identifying a TLS subscription.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_authorizations`, `tls_authorizations.globalsign_email_challenge`, `tls_authorizations.self_managed_http_challenge`, and `tls_certificates`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsSubscriptionResponse} and HTTP response
     */
    getTlsSubWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'tls_subscription_id' is set.
      if (options['tls_subscription_id'] === undefined || options['tls_subscription_id'] === null) {
        throw new Error("Missing the required parameter 'tls_subscription_id'.");
      }

      let pathParams = {
        'tls_subscription_id': options['tls_subscription_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'include': options['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = TlsSubscriptionResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/tls/subscriptions/{tls_subscription_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Show a TLS subscription.
     * @param {Object} options
     * @param {String} options.tls_subscription_id - Alphanumeric string identifying a TLS subscription.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_authorizations`, `tls_authorizations.globalsign_email_challenge`, `tls_authorizations.self_managed_http_challenge`, and `tls_certificates`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsSubscriptionResponse}
     */
    getTlsSub(options = {}) {
      return this.getTlsSubWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all TLS subscriptions.
     * @param {Object} options
     * @param {String} [options.filter_state] - Limit the returned subscriptions by state. Valid values are `pending`, `processing`, `issued`, `renewing`, and `failed`. Accepts parameters: `not` (e.g., `filter[state][not]=renewing`). 
     * @param {String} [options.filter_tls_domains_id] - Limit the returned subscriptions to those that include the specific domain.
     * @param {Boolean} [options.filter_has_active_order] - Limit the returned subscriptions to those that have currently active orders. Permitted values: `true`. 
     * @param {String} [options.filter_certificate_authority] - Limit the returned subscriptions to a specific certification authority. Values may include `certainly`, `lets-encrypt`, or `globalsign`. 
     * @param {module:model/String} [options.sort='-created_at'] - The order in which to list the results.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_authorizations`, `tls_authorizations.globalsign_email_challenge`, `tls_authorizations.self_managed_http_challenge`, and `tls_certificates`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsSubscriptionsResponse} and HTTP response
     */
    listTlsSubsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'filter[state]': options['filter_state'],
        'filter[tls_domains.id]': options['filter_tls_domains_id'],
        'filter[has_active_order]': options['filter_has_active_order'],
        'filter[certificate_authority]': options['filter_certificate_authority'],
        'sort': options['sort'],
        'include': options['include'],
        'page[number]': options['page_number'],
        'page[size]': options['page_size']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = TlsSubscriptionsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/tls/subscriptions', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all TLS subscriptions.
     * @param {Object} options
     * @param {String} [options.filter_state] - Limit the returned subscriptions by state. Valid values are `pending`, `processing`, `issued`, `renewing`, and `failed`. Accepts parameters: `not` (e.g., `filter[state][not]=renewing`). 
     * @param {String} [options.filter_tls_domains_id] - Limit the returned subscriptions to those that include the specific domain.
     * @param {Boolean} [options.filter_has_active_order] - Limit the returned subscriptions to those that have currently active orders. Permitted values: `true`. 
     * @param {String} [options.filter_certificate_authority] - Limit the returned subscriptions to a specific certification authority. Values may include `certainly`, `lets-encrypt`, or `globalsign`. 
     * @param {module:model/String} [options.sort='-created_at'] - The order in which to list the results.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_authorizations`, `tls_authorizations.globalsign_email_challenge`, `tls_authorizations.self_managed_http_challenge`, and `tls_certificates`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsSubscriptionsResponse}
     */
    listTlsSubs(options = {}) {
      return this.listTlsSubsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Change the TLS domains or common name associated with this subscription, update the TLS configuration for this set of domains, or retry a subscription with state `failed` by setting the state to `retry`.
     * @param {Object} options
     * @param {String} options.tls_subscription_id - Alphanumeric string identifying a TLS subscription.
     * @param {Boolean} [options.force] - A flag that allows you to edit and delete a subscription with active domains. Valid to use on PATCH and DELETE actions. As a warning, removing an active domain from a subscription or forcing the deletion of a subscription may result in breaking TLS termination to that domain. 
     * @param {module:model/TlsSubscription} [options.tls_subscription]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsSubscriptionResponse} and HTTP response
     */
    patchTlsSubWithHttpInfo(options = {}) {
      let postBody = options['tls_subscription'];
      // Verify the required parameter 'tls_subscription_id' is set.
      if (options['tls_subscription_id'] === undefined || options['tls_subscription_id'] === null) {
        throw new Error("Missing the required parameter 'tls_subscription_id'.");
      }

      let pathParams = {
        'tls_subscription_id': options['tls_subscription_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'force': options['force']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/vnd.api+json'];
      let accepts = ['application/vnd.api+json'];
      let returnType = TlsSubscriptionResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/tls/subscriptions/{tls_subscription_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Change the TLS domains or common name associated with this subscription, update the TLS configuration for this set of domains, or retry a subscription with state `failed` by setting the state to `retry`.
     * @param {Object} options
     * @param {String} options.tls_subscription_id - Alphanumeric string identifying a TLS subscription.
     * @param {Boolean} [options.force] - A flag that allows you to edit and delete a subscription with active domains. Valid to use on PATCH and DELETE actions. As a warning, removing an active domain from a subscription or forcing the deletion of a subscription may result in breaking TLS termination to that domain. 
     * @param {module:model/TlsSubscription} [options.tls_subscription]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsSubscriptionResponse}
     */
    patchTlsSub(options = {}) {
      return this.patchTlsSubWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
