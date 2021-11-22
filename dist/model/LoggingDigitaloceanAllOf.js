"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingDigitaloceanAllOf model module.
 * @module model/LoggingDigitaloceanAllOf
 * @version 3.0.0-alpha1
 */
var LoggingDigitaloceanAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingDigitaloceanAllOf</code>.
   * @alias module:model/LoggingDigitaloceanAllOf
   */
  function LoggingDigitaloceanAllOf() {
    _classCallCheck(this, LoggingDigitaloceanAllOf);

    LoggingDigitaloceanAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingDigitaloceanAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingDigitaloceanAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingDigitaloceanAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingDigitaloceanAllOf} The populated <code>LoggingDigitaloceanAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingDigitaloceanAllOf();

        if (data.hasOwnProperty('bucket_name')) {
          obj['bucket_name'] = _ApiClient["default"].convertToType(data['bucket_name'], 'String');
        }

        if (data.hasOwnProperty('access_key')) {
          obj['access_key'] = _ApiClient["default"].convertToType(data['access_key'], 'String');
        }

        if (data.hasOwnProperty('secret_key')) {
          obj['secret_key'] = _ApiClient["default"].convertToType(data['secret_key'], 'String');
        }

        if (data.hasOwnProperty('domain')) {
          obj['domain'] = _ApiClient["default"].convertToType(data['domain'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _ApiClient["default"].convertToType(data['public_key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingDigitaloceanAllOf;
}();
/**
 * The name of the DigitalOcean Space.
 * @member {String} bucket_name
 */


LoggingDigitaloceanAllOf.prototype['bucket_name'] = undefined;
/**
 * Your DigitalOcean Spaces account access key.
 * @member {String} access_key
 */

LoggingDigitaloceanAllOf.prototype['access_key'] = undefined;
/**
 * Your DigitalOcean Spaces account secret key.
 * @member {String} secret_key
 */

LoggingDigitaloceanAllOf.prototype['secret_key'] = undefined;
/**
 * The domain of the DigitalOcean Spaces endpoint.
 * @member {String} domain
 * @default 'nyc3.digitaloceanspaces.com'
 */

LoggingDigitaloceanAllOf.prototype['domain'] = 'nyc3.digitaloceanspaces.com';
/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */

LoggingDigitaloceanAllOf.prototype['path'] = 'null';
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */

LoggingDigitaloceanAllOf.prototype['public_key'] = 'null';
var _default = LoggingDigitaloceanAllOf;
exports["default"] = _default;