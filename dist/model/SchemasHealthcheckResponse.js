"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SchemasHealthcheck = _interopRequireDefault(require("./SchemasHealthcheck"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SchemasHealthcheckResponse model module.
 * @module model/SchemasHealthcheckResponse
 * @version 3.0.0-alpha1
 */
var SchemasHealthcheckResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SchemasHealthcheckResponse</code>.
   * @alias module:model/SchemasHealthcheckResponse
   * @implements module:model/SchemasHealthcheck
   * @implements module:model/ServiceIdAndVersion
   * @implements module:model/Timestamps
   */
  function SchemasHealthcheckResponse() {
    _classCallCheck(this, SchemasHealthcheckResponse);

    _SchemasHealthcheck["default"].initialize(this);

    _ServiceIdAndVersion["default"].initialize(this);

    _Timestamps["default"].initialize(this);

    SchemasHealthcheckResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SchemasHealthcheckResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SchemasHealthcheckResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasHealthcheckResponse} obj Optional instance to populate.
     * @return {module:model/SchemasHealthcheckResponse} The populated <code>SchemasHealthcheckResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SchemasHealthcheckResponse();

        _SchemasHealthcheck["default"].constructFromObject(data, obj);

        _ServiceIdAndVersion["default"].constructFromObject(data, obj);

        _Timestamps["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('check_interval')) {
          obj['check_interval'] = _ApiClient["default"].convertToType(data['check_interval'], 'Number');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('expected_response')) {
          obj['expected_response'] = _ApiClient["default"].convertToType(data['expected_response'], 'Number');
        }

        if (data.hasOwnProperty('host')) {
          obj['host'] = _ApiClient["default"].convertToType(data['host'], 'String');
        }

        if (data.hasOwnProperty('http_version')) {
          obj['http_version'] = _ApiClient["default"].convertToType(data['http_version'], 'String');
        }

        if (data.hasOwnProperty('initial')) {
          obj['initial'] = _ApiClient["default"].convertToType(data['initial'], 'Number');
        }

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient["default"].convertToType(data['method'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('threshold')) {
          obj['threshold'] = _ApiClient["default"].convertToType(data['threshold'], 'Number');
        }

        if (data.hasOwnProperty('timeout')) {
          obj['timeout'] = _ApiClient["default"].convertToType(data['timeout'], 'Number');
        }

        if (data.hasOwnProperty('window')) {
          obj['window'] = _ApiClient["default"].convertToType(data['window'], 'Number');
        }

        if (data.hasOwnProperty('service_id')) {
          obj['service_id'] = _ApiClient["default"].convertToType(data['service_id'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('deleted_at')) {
          obj['deleted_at'] = _ApiClient["default"].convertToType(data['deleted_at'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SchemasHealthcheckResponse;
}();
/**
 * How often to run the healthcheck in milliseconds.
 * @member {Number} check_interval
 */


SchemasHealthcheckResponse.prototype['check_interval'] = undefined;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */

SchemasHealthcheckResponse.prototype['comment'] = undefined;
/**
 * The status code expected from the host.
 * @member {Number} expected_response
 */

SchemasHealthcheckResponse.prototype['expected_response'] = undefined;
/**
 * Which host to check.
 * @member {String} host
 */

SchemasHealthcheckResponse.prototype['host'] = undefined;
/**
 * Whether to use version 1.0 or 1.1 HTTP.
 * @member {String} http_version
 */

SchemasHealthcheckResponse.prototype['http_version'] = undefined;
/**
 * When loading a config, the initial number of probes to be seen as OK.
 * @member {Number} initial
 */

SchemasHealthcheckResponse.prototype['initial'] = undefined;
/**
 * Which HTTP method to use.
 * @member {String} method
 */

SchemasHealthcheckResponse.prototype['method'] = undefined;
/**
 * The name of the healthcheck.
 * @member {String} name
 */

SchemasHealthcheckResponse.prototype['name'] = undefined;
/**
 * The path to check.
 * @member {String} path
 */

SchemasHealthcheckResponse.prototype['path'] = undefined;
/**
 * How many healthchecks must succeed to be considered healthy.
 * @member {Number} threshold
 */

SchemasHealthcheckResponse.prototype['threshold'] = undefined;
/**
 * Timeout in milliseconds.
 * @member {Number} timeout
 */

SchemasHealthcheckResponse.prototype['timeout'] = undefined;
/**
 * The number of most recent healthcheck queries to keep for this healthcheck.
 * @member {Number} window
 */

SchemasHealthcheckResponse.prototype['window'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

SchemasHealthcheckResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

SchemasHealthcheckResponse.prototype['version'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

SchemasHealthcheckResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

SchemasHealthcheckResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

SchemasHealthcheckResponse.prototype['updated_at'] = undefined; // Implement SchemasHealthcheck interface:

/**
 * How often to run the healthcheck in milliseconds.
 * @member {Number} check_interval
 */

_SchemasHealthcheck["default"].prototype['check_interval'] = undefined;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */

_SchemasHealthcheck["default"].prototype['comment'] = undefined;
/**
 * The status code expected from the host.
 * @member {Number} expected_response
 */

_SchemasHealthcheck["default"].prototype['expected_response'] = undefined;
/**
 * Which host to check.
 * @member {String} host
 */

_SchemasHealthcheck["default"].prototype['host'] = undefined;
/**
 * Whether to use version 1.0 or 1.1 HTTP.
 * @member {String} http_version
 */

_SchemasHealthcheck["default"].prototype['http_version'] = undefined;
/**
 * When loading a config, the initial number of probes to be seen as OK.
 * @member {Number} initial
 */

_SchemasHealthcheck["default"].prototype['initial'] = undefined;
/**
 * Which HTTP method to use.
 * @member {String} method
 */

_SchemasHealthcheck["default"].prototype['method'] = undefined;
/**
 * The name of the healthcheck.
 * @member {String} name
 */

_SchemasHealthcheck["default"].prototype['name'] = undefined;
/**
 * The path to check.
 * @member {String} path
 */

_SchemasHealthcheck["default"].prototype['path'] = undefined;
/**
 * How many healthchecks must succeed to be considered healthy.
 * @member {Number} threshold
 */

_SchemasHealthcheck["default"].prototype['threshold'] = undefined;
/**
 * Timeout in milliseconds.
 * @member {Number} timeout
 */

_SchemasHealthcheck["default"].prototype['timeout'] = undefined;
/**
 * The number of most recent healthcheck queries to keep for this healthcheck.
 * @member {Number} window
 */

_SchemasHealthcheck["default"].prototype['window'] = undefined; // Implement ServiceIdAndVersion interface:

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

_ServiceIdAndVersion["default"].prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

_ServiceIdAndVersion["default"].prototype['version'] = undefined; // Implement Timestamps interface:

/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

_Timestamps["default"].prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

_Timestamps["default"].prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

_Timestamps["default"].prototype['updated_at'] = undefined;
var _default = SchemasHealthcheckResponse;
exports["default"] = _default;