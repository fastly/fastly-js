"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DirectorBackend = _interopRequireDefault(require("../model/DirectorBackend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* DirectorBackend service.
* @module api/DirectorBackendApi
* @version 3.0.0-alpha1
*/
var DirectorBackendApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DirectorBackendApi. 
  * @alias module:api/DirectorBackendApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DirectorBackendApi(apiClient) {
    _classCallCheck(this, DirectorBackendApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Establishes a relationship between a Backend and a Director. The Backend is then considered a member of the Director and can be used to balance traffic onto.
   * @param {Object} options
   * @param {String} options.director_name - Name for the Director.
   * @param {String} options.service_id - Alphanumeric string identifying the service.
   * @param {Number} options.version_id - Integer identifying a service version.
   * @param {String} options.backend_name - The name of the backend.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DirectorBackend} and HTTP response
   */


  _createClass(DirectorBackendApi, [{
    key: "createDirectorBackendWithHttpInfo",
    value: function createDirectorBackendWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'director_name' is set.

      if (options['director_name'] === undefined || options['director_name'] === null) {
        throw new Error("Missing the required parameter 'director_name'.");
      } // Verify the required parameter 'service_id' is set.


      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'backend_name' is set.


      if (options['backend_name'] === undefined || options['backend_name'] === null) {
        throw new Error("Missing the required parameter 'backend_name'.");
      }

      var pathParams = {
        'director_name': options['director_name'],
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'backend_name': options['backend_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DirectorBackend["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/director/{director_name}/backend/{backend_name}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Establishes a relationship between a Backend and a Director. The Backend is then considered a member of the Director and can be used to balance traffic onto.
     * @param {Object} options
     * @param {String} options.director_name - Name for the Director.
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.backend_name - The name of the backend.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DirectorBackend}
     */

  }, {
    key: "createDirectorBackend",
    value: function createDirectorBackend() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createDirectorBackendWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Deletes the relationship between a Backend and a Director. The Backend is no longer considered a member of the Director and thus will not have traffic balanced onto it from this Director.
     * @param {Object} options
     * @param {String} options.director_name - Name for the Director.
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.backend_name - The name of the backend.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteDirectorBackendWithHttpInfo",
    value: function deleteDirectorBackendWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'director_name' is set.

      if (options['director_name'] === undefined || options['director_name'] === null) {
        throw new Error("Missing the required parameter 'director_name'.");
      } // Verify the required parameter 'service_id' is set.


      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'backend_name' is set.


      if (options['backend_name'] === undefined || options['backend_name'] === null) {
        throw new Error("Missing the required parameter 'backend_name'.");
      }

      var pathParams = {
        'director_name': options['director_name'],
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'backend_name': options['backend_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/director/{director_name}/backend/{backend_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Deletes the relationship between a Backend and a Director. The Backend is no longer considered a member of the Director and thus will not have traffic balanced onto it from this Director.
     * @param {Object} options
     * @param {String} options.director_name - Name for the Director.
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.backend_name - The name of the backend.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteDirectorBackend",
    value: function deleteDirectorBackend() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteDirectorBackendWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Returns the relationship between a Backend and a Director. If the Backend has been associated with the Director, it returns a simple record indicating this. Otherwise, returns a 404.
     * @param {Object} options
     * @param {String} options.director_name - Name for the Director.
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.backend_name - The name of the backend.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DirectorBackend} and HTTP response
     */

  }, {
    key: "getDirectorBackendWithHttpInfo",
    value: function getDirectorBackendWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'director_name' is set.

      if (options['director_name'] === undefined || options['director_name'] === null) {
        throw new Error("Missing the required parameter 'director_name'.");
      } // Verify the required parameter 'service_id' is set.


      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'backend_name' is set.


      if (options['backend_name'] === undefined || options['backend_name'] === null) {
        throw new Error("Missing the required parameter 'backend_name'.");
      }

      var pathParams = {
        'director_name': options['director_name'],
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'backend_name': options['backend_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DirectorBackend["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/director/{director_name}/backend/{backend_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Returns the relationship between a Backend and a Director. If the Backend has been associated with the Director, it returns a simple record indicating this. Otherwise, returns a 404.
     * @param {Object} options
     * @param {String} options.director_name - Name for the Director.
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.backend_name - The name of the backend.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DirectorBackend}
     */

  }, {
    key: "getDirectorBackend",
    value: function getDirectorBackend() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getDirectorBackendWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return DirectorBackendApi;
}();

exports["default"] = DirectorBackendApi;