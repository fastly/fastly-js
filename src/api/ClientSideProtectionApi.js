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
import InlineResponse20010 from '../model/InlineResponse20010';
import InlineResponse20011 from '../model/InlineResponse20011';
import InlineResponse2005 from '../model/InlineResponse2005';
import InlineResponse2006 from '../model/InlineResponse2006';
import InlineResponse2007 from '../model/InlineResponse2007';
import InlineResponse2008 from '../model/InlineResponse2008';
import InlineResponse2009 from '../model/InlineResponse2009';
import Page from '../model/Page';
import PageCreate from '../model/PageCreate';
import PageUpdate from '../model/PageUpdate';
import Policy from '../model/Policy';
import PolicyCreate from '../model/PolicyCreate';
import PolicyUpdate from '../model/PolicyUpdate';
import Script from '../model/Script';
import ScriptUpdate from '../model/ScriptUpdate';
import Website from '../model/Website';
import WebsiteCreate from '../model/WebsiteCreate';
import WebsiteUpdate from '../model/WebsiteUpdate';

/**
* ClientSideProtection service.
* @module api/ClientSideProtectionApi
* @version 16.0.0
*/
export default class ClientSideProtectionApi {

    /**
    * Constructs a new ClientSideProtectionApi. 
    * @alias module:api/ClientSideProtectionApi
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
     * Create a new page for monitoring.
     * @param {Object} options
     * @param {module:model/PageCreate} [options.page_create]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Page} and HTTP response
     */
    cspCreatePageWithHttpInfo(options = {}) {
      let postBody = options['page_create'];

      let pathParams = {
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = Page;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/client-side-protection/v1/pages', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a new page for monitoring.
     * @param {Object} options
     * @param {module:model/PageCreate} [options.page_create]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Page}
     */
    cspCreatePage(options = {}) {
      return this.cspCreatePageWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Create a new Content Security Policy for a page.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {module:model/PolicyCreate} [options.policy_create]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Policy} and HTTP response
     */
    cspCreatePolicyWithHttpInfo(options = {}) {
      let postBody = options['policy_create'];
      // Verify the required parameter 'page_id' is set.
      if (options['page_id'] === undefined || options['page_id'] === null) {
        throw new Error("Missing the required parameter 'page_id'.");
      }

      let pathParams = {
        'page_id': options['page_id']
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = Policy;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/client-side-protection/v1/pages/{page_id}/policies', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a new Content Security Policy for a page.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {module:model/PolicyCreate} [options.policy_create]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Policy}
     */
    cspCreatePolicy(options = {}) {
      return this.cspCreatePolicyWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Create a new website for Client-Side Protection monitoring.
     * @param {Object} options
     * @param {module:model/WebsiteCreate} [options.website_create]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Website} and HTTP response
     */
    cspCreateWebsiteWithHttpInfo(options = {}) {
      let postBody = options['website_create'];

      let pathParams = {
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = Website;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/client-side-protection/v1/websites', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a new website for Client-Side Protection monitoring.
     * @param {Object} options
     * @param {module:model/WebsiteCreate} [options.website_create]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Website}
     */
    cspCreateWebsite(options = {}) {
      return this.cspCreateWebsiteWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete a page and all associated scripts and policies.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    cspDeletePageWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'page_id' is set.
      if (options['page_id'] === undefined || options['page_id'] === null) {
        throw new Error("Missing the required parameter 'page_id'.");
      }

      let pathParams = {
        'page_id': options['page_id']
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
      let accepts = ['application/problem+json'];
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
        '/client-side-protection/v1/pages/{page_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete a page and all associated scripts and policies.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    cspDeletePage(options = {}) {
      return this.cspDeletePageWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete a website and all associated pages, scripts, and policies.
     * @param {Object} options
     * @param {String} options.website_id - Website identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    cspDeleteWebsiteWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'website_id' is set.
      if (options['website_id'] === undefined || options['website_id'] === null) {
        throw new Error("Missing the required parameter 'website_id'.");
      }

      let pathParams = {
        'website_id': options['website_id']
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
      let accepts = ['application/problem+json'];
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
        '/client-side-protection/v1/websites/{website_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete a website and all associated pages, scripts, and policies.
     * @param {Object} options
     * @param {String} options.website_id - Website identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    cspDeleteWebsite(options = {}) {
      return this.cspDeleteWebsiteWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get details for a specific page.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Page} and HTTP response
     */
    cspGetPageWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'page_id' is set.
      if (options['page_id'] === undefined || options['page_id'] === null) {
        throw new Error("Missing the required parameter 'page_id'.");
      }

      let pathParams = {
        'page_id': options['page_id']
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = Page;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/client-side-protection/v1/pages/{page_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get details for a specific page.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Page}
     */
    cspGetPage(options = {}) {
      return this.cspGetPageWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get details for a specific policy.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {String} options.policy_id - Policy identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Policy} and HTTP response
     */
    cspGetPolicyWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'page_id' is set.
      if (options['page_id'] === undefined || options['page_id'] === null) {
        throw new Error("Missing the required parameter 'page_id'.");
      }
      // Verify the required parameter 'policy_id' is set.
      if (options['policy_id'] === undefined || options['policy_id'] === null) {
        throw new Error("Missing the required parameter 'policy_id'.");
      }

      let pathParams = {
        'page_id': options['page_id'],
        'policy_id': options['policy_id']
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = Policy;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/client-side-protection/v1/pages/{page_id}/policies/{policy_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get details for a specific policy.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {String} options.policy_id - Policy identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Policy}
     */
    cspGetPolicy(options = {}) {
      return this.cspGetPolicyWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get details for a specific script.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {String} options.script_id - Script identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Script} and HTTP response
     */
    cspGetScriptWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'page_id' is set.
      if (options['page_id'] === undefined || options['page_id'] === null) {
        throw new Error("Missing the required parameter 'page_id'.");
      }
      // Verify the required parameter 'script_id' is set.
      if (options['script_id'] === undefined || options['script_id'] === null) {
        throw new Error("Missing the required parameter 'script_id'.");
      }

      let pathParams = {
        'page_id': options['page_id'],
        'script_id': options['script_id']
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = Script;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/client-side-protection/v1/pages/{page_id}/scripts/{script_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get details for a specific script.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {String} options.script_id - Script identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Script}
     */
    cspGetScript(options = {}) {
      return this.cspGetScriptWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get details for a specific website.
     * @param {Object} options
     * @param {String} options.website_id - Website identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Website} and HTTP response
     */
    cspGetWebsiteWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'website_id' is set.
      if (options['website_id'] === undefined || options['website_id'] === null) {
        throw new Error("Missing the required parameter 'website_id'.");
      }

      let pathParams = {
        'website_id': options['website_id']
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = Website;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/client-side-protection/v1/websites/{website_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get details for a specific website.
     * @param {Object} options
     * @param {String} options.website_id - Website identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Website}
     */
    cspGetWebsite(options = {}) {
      return this.cspGetWebsiteWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List security header change events for a page.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {Number} [options.page=0] - Page number of the collection to request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20011} and HTTP response
     */
    cspListHeaderEventsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'page_id' is set.
      if (options['page_id'] === undefined || options['page_id'] === null) {
        throw new Error("Missing the required parameter 'page_id'.");
      }

      let pathParams = {
        'page_id': options['page_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'limit': options['limit'],
        'page': options['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = InlineResponse20011;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/client-side-protection/v1/pages/{page_id}/events', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List security header change events for a page.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {Number} [options.page=0] - Page number of the collection to request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20011}
     */
    cspListHeaderEvents(options = {}) {
      return this.cspListHeaderEventsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List security headers detected on a page.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {Number} [options.page=0] - Page number of the collection to request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20010} and HTTP response
     */
    cspListHeadersWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'page_id' is set.
      if (options['page_id'] === undefined || options['page_id'] === null) {
        throw new Error("Missing the required parameter 'page_id'.");
      }

      let pathParams = {
        'page_id': options['page_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'limit': options['limit'],
        'page': options['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = InlineResponse20010;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/client-side-protection/v1/pages/{page_id}/headers', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List security headers detected on a page.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {Number} [options.page=0] - Page number of the collection to request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20010}
     */
    cspListHeaders(options = {}) {
      return this.cspListHeadersWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all pages. Optionally filter by website.
     * @param {Object} options
     * @param {String} [options.website_id] - Filter pages by website ID
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {Number} [options.page=0] - Page number of the collection to request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2006} and HTTP response
     */
    cspListPagesWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'website_id': options['website_id'],
        'limit': options['limit'],
        'page': options['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = InlineResponse2006;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/client-side-protection/v1/pages', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all pages. Optionally filter by website.
     * @param {Object} options
     * @param {String} [options.website_id] - Filter pages by website ID
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {Number} [options.page=0] - Page number of the collection to request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2006}
     */
    cspListPages(options = {}) {
      return this.cspListPagesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all Content Security Policies for a page.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {Number} [options.page=0] - Page number of the collection to request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2008} and HTTP response
     */
    cspListPoliciesWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'page_id' is set.
      if (options['page_id'] === undefined || options['page_id'] === null) {
        throw new Error("Missing the required parameter 'page_id'.");
      }

      let pathParams = {
        'page_id': options['page_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'limit': options['limit'],
        'page': options['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = InlineResponse2008;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/client-side-protection/v1/pages/{page_id}/policies', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all Content Security Policies for a page.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {Number} [options.page=0] - Page number of the collection to request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2008}
     */
    cspListPolicies(options = {}) {
      return this.cspListPoliciesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List CSP violation reports for a policy.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {String} options.policy_id - Policy identifier
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {Number} [options.page=0] - Page number of the collection to request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2009} and HTTP response
     */
    cspListPolicyReportsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'page_id' is set.
      if (options['page_id'] === undefined || options['page_id'] === null) {
        throw new Error("Missing the required parameter 'page_id'.");
      }
      // Verify the required parameter 'policy_id' is set.
      if (options['policy_id'] === undefined || options['policy_id'] === null) {
        throw new Error("Missing the required parameter 'policy_id'.");
      }

      let pathParams = {
        'page_id': options['page_id'],
        'policy_id': options['policy_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'limit': options['limit'],
        'page': options['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = InlineResponse2009;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/client-side-protection/v1/pages/{page_id}/policies/{policy_id}/reports', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List CSP violation reports for a policy.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {String} options.policy_id - Policy identifier
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {Number} [options.page=0] - Page number of the collection to request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2009}
     */
    cspListPolicyReports(options = {}) {
      return this.cspListPolicyReportsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all scripts detected on a page.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {Number} [options.page=0] - Page number of the collection to request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2007} and HTTP response
     */
    cspListScriptsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'page_id' is set.
      if (options['page_id'] === undefined || options['page_id'] === null) {
        throw new Error("Missing the required parameter 'page_id'.");
      }

      let pathParams = {
        'page_id': options['page_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'limit': options['limit'],
        'page': options['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = InlineResponse2007;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/client-side-protection/v1/pages/{page_id}/scripts', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all scripts detected on a page.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {Number} [options.page=0] - Page number of the collection to request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2007}
     */
    cspListScripts(options = {}) {
      return this.cspListScriptsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all websites configured for Client-Side Protection.
     * @param {Object} options
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {Number} [options.page=0] - Page number of the collection to request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
     */
    cspListWebsitesWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'limit': options['limit'],
        'page': options['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = InlineResponse2005;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/client-side-protection/v1/websites', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all websites configured for Client-Side Protection.
     * @param {Object} options
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {Number} [options.page=0] - Page number of the collection to request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
     */
    cspListWebsites(options = {}) {
      return this.cspListWebsitesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a page's configuration.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {module:model/PageUpdate} [options.page_update]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Page} and HTTP response
     */
    cspUpdatePageWithHttpInfo(options = {}) {
      let postBody = options['page_update'];
      // Verify the required parameter 'page_id' is set.
      if (options['page_id'] === undefined || options['page_id'] === null) {
        throw new Error("Missing the required parameter 'page_id'.");
      }

      let pathParams = {
        'page_id': options['page_id']
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = Page;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/client-side-protection/v1/pages/{page_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update a page's configuration.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {module:model/PageUpdate} [options.page_update]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Page}
     */
    cspUpdatePage(options = {}) {
      return this.cspUpdatePageWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a policy's configuration.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {String} options.policy_id - Policy identifier
     * @param {module:model/PolicyUpdate} [options.policy_update]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Policy} and HTTP response
     */
    cspUpdatePolicyWithHttpInfo(options = {}) {
      let postBody = options['policy_update'];
      // Verify the required parameter 'page_id' is set.
      if (options['page_id'] === undefined || options['page_id'] === null) {
        throw new Error("Missing the required parameter 'page_id'.");
      }
      // Verify the required parameter 'policy_id' is set.
      if (options['policy_id'] === undefined || options['policy_id'] === null) {
        throw new Error("Missing the required parameter 'policy_id'.");
      }

      let pathParams = {
        'page_id': options['page_id'],
        'policy_id': options['policy_id']
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = Policy;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/client-side-protection/v1/pages/{page_id}/policies/{policy_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update a policy's configuration.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {String} options.policy_id - Policy identifier
     * @param {module:model/PolicyUpdate} [options.policy_update]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Policy}
     */
    cspUpdatePolicy(options = {}) {
      return this.cspUpdatePolicyWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a script's authorization status or justification.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {String} options.script_id - Script identifier
     * @param {module:model/ScriptUpdate} [options.script_update]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Script} and HTTP response
     */
    cspUpdateScriptWithHttpInfo(options = {}) {
      let postBody = options['script_update'];
      // Verify the required parameter 'page_id' is set.
      if (options['page_id'] === undefined || options['page_id'] === null) {
        throw new Error("Missing the required parameter 'page_id'.");
      }
      // Verify the required parameter 'script_id' is set.
      if (options['script_id'] === undefined || options['script_id'] === null) {
        throw new Error("Missing the required parameter 'script_id'.");
      }

      let pathParams = {
        'page_id': options['page_id'],
        'script_id': options['script_id']
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = Script;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/client-side-protection/v1/pages/{page_id}/scripts/{script_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update a script's authorization status or justification.
     * @param {Object} options
     * @param {String} options.page_id - Page identifier
     * @param {String} options.script_id - Script identifier
     * @param {module:model/ScriptUpdate} [options.script_update]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Script}
     */
    cspUpdateScript(options = {}) {
      return this.cspUpdateScriptWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a website's configuration.
     * @param {Object} options
     * @param {String} options.website_id - Website identifier
     * @param {module:model/WebsiteUpdate} [options.website_update]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Website} and HTTP response
     */
    cspUpdateWebsiteWithHttpInfo(options = {}) {
      let postBody = options['website_update'];
      // Verify the required parameter 'website_id' is set.
      if (options['website_id'] === undefined || options['website_id'] === null) {
        throw new Error("Missing the required parameter 'website_id'.");
      }

      let pathParams = {
        'website_id': options['website_id']
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = Website;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/client-side-protection/v1/websites/{website_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update a website's configuration.
     * @param {Object} options
     * @param {String} options.website_id - Website identifier
     * @param {module:model/WebsiteUpdate} [options.website_update]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Website}
     */
    cspUpdateWebsite(options = {}) {
      return this.cspUpdateWebsiteWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
