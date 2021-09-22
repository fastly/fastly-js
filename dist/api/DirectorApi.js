"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Backend = _interopRequireDefault(require("../model/Backend"));

var _DirectorResponse = _interopRequireDefault(require("../model/DirectorResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Director service.
* @module api/DirectorApi
* @version 3.0.0-alpha1
*/
var DirectorApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DirectorApi. 
  * @alias module:api/DirectorApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DirectorApi(apiClient) {
    _classCallCheck(this, DirectorApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create a director for a particular service and version.
   * @param {Object} options
   * @param {String} options.service_id
   * @param {Number} options.version_id
   * @param {Array.<module:model/Backend>} [options.backends] - List of backends associated to a director.
   * @param {Number} [options.capacity] - Unused.
   * @param {String} [options.comment] - A freeform descriptive note.
   * @param {String} [options.name] - Name for the Director.
   * @param {Number} [options.quorum=75] - The percentage of capacity that needs to be up for a director to be considered up. `0` to `100`.
   * @param {Number} [options.retries=5] - How many backends to search if it fails.
   * @param {String} [options.shield='null'] - Selected POP to serve as a shield for the backends. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding.
   * @param {module:model/Number} [options.type=1] - What type of load balance group to use.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DirectorResponse} and HTTP response
   */


  _createClass(DirectorApi, [{
    key: "createDirectorWithHttpInfo",
    value: function createDirectorWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'backends': this.apiClient.buildCollectionParam(options['backends'], 'csv'),
        'capacity': options['capacity'],
        'comment': options['comment'],
        'name': options['name'],
        'quorum': options['quorum'],
        'retries': options['retries'],
        'shield': options['shield'],
        'type': options['type']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _DirectorResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/director', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a director for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {Array.<module:model/Backend>} [options.backends] - List of backends associated to a director.
     * @param {Number} [options.capacity] - Unused.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {String} [options.name] - Name for the Director.
     * @param {Number} [options.quorum=75] - The percentage of capacity that needs to be up for a director to be considered up. `0` to `100`.
     * @param {Number} [options.retries=5] - How many backends to search if it fails.
     * @param {String} [options.shield='null'] - Selected POP to serve as a shield for the backends. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding.
     * @param {module:model/Number} [options.type=1] - What type of load balance group to use.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DirectorResponse}
     */

  }, {
    key: "createDirector",
    value: function createDirector() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createDirectorWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete the director for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.director_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteDirectorWithHttpInfo",
    value: function deleteDirectorWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'director_name' is set.


      if (options['director_name'] === undefined || options['director_name'] === null) {
        throw new Error("Missing the required parameter 'director_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'director_name': options['director_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/director/{director_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete the director for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.director_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteDirector",
    value: function deleteDirector() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteDirectorWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the director for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.director_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DirectorResponse} and HTTP response
     */

  }, {
    key: "getDirectorWithHttpInfo",
    value: function getDirectorWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'director_name' is set.


      if (options['director_name'] === undefined || options['director_name'] === null) {
        throw new Error("Missing the required parameter 'director_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'director_name': options['director_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DirectorResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/director/{director_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the director for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.director_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DirectorResponse}
     */

  }, {
    key: "getDirector",
    value: function getDirector() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getDirectorWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List the directors for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DirectorResponse>} and HTTP response
     */

  }, {
    key: "listDirectorsWithHttpInfo",
    value: function listDirectorsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_DirectorResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/director', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List the directors for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DirectorResponse>}
     */

  }, {
    key: "listDirectors",
    value: function listDirectors() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listDirectorsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update the director for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.director_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DirectorResponse} and HTTP response
     */

  }, {
    key: "updateDirectorWithHttpInfo",
    value: function updateDirectorWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'director_name' is set.


      if (options['director_name'] === undefined || options['director_name'] === null) {
        throw new Error("Missing the required parameter 'director_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'director_name': options['director_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _DirectorResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/director/{director_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update the director for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.director_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DirectorResponse}
     */

  }, {
    key: "updateDirector",
    value: function updateDirector() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateDirectorWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return DirectorApi;
}();

exports["default"] = DirectorApi;