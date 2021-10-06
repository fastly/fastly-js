"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Settings = _interopRequireDefault(require("./Settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SettingsResponse model module.
 * @module model/SettingsResponse
 * @version 3.0.0-alpha1
 */
var SettingsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SettingsResponse</code>.
   * @alias module:model/SettingsResponse
   */
  function SettingsResponse() {
    _classCallCheck(this, SettingsResponse);

    SettingsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SettingsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SettingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SettingsResponse} obj Optional instance to populate.
     * @return {module:model/SettingsResponse} The populated <code>SettingsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SettingsResponse();

        if (data.hasOwnProperty('general.default_host')) {
          obj['general.default_host'] = _ApiClient["default"].convertToType(data['general.default_host'], 'String');
        }

        if (data.hasOwnProperty('general.default_ttl')) {
          obj['general.default_ttl'] = _ApiClient["default"].convertToType(data['general.default_ttl'], 'Number');
        }

        if (data.hasOwnProperty('general.stale_if_error')) {
          obj['general.stale_if_error'] = _ApiClient["default"].convertToType(data['general.stale_if_error'], 'Boolean');
        }

        if (data.hasOwnProperty('general.stale_if_error_ttl')) {
          obj['general.stale_if_error_ttl'] = _ApiClient["default"].convertToType(data['general.stale_if_error_ttl'], 'Number');
        }

        if (data.hasOwnProperty('service_id')) {
          obj['service_id'] = _ApiClient["default"].convertToType(data['service_id'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SettingsResponse;
}();
/**
 * The default host name for the version.
 * @member {String} general.default_host
 */


SettingsResponse.prototype['general.default_host'] = undefined;
/**
 * The default time-to-live (TTL) for the version.
 * @member {Number} general.default_ttl
 */

SettingsResponse.prototype['general.default_ttl'] = undefined;
/**
 * Enables serving a stale object if there is an error.
 * @member {Boolean} general.stale_if_error
 * @default false
 */

SettingsResponse.prototype['general.stale_if_error'] = false;
/**
 * The default time-to-live (TTL) for serving the stale object for the version.
 * @member {Number} general.stale_if_error_ttl
 * @default 43200
 */

SettingsResponse.prototype['general.stale_if_error_ttl'] = 43200;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

SettingsResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

SettingsResponse.prototype['version'] = undefined;
var _default = SettingsResponse;
exports["default"] = _default;