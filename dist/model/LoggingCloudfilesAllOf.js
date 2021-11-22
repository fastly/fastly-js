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
 * The LoggingCloudfilesAllOf model module.
 * @module model/LoggingCloudfilesAllOf
 * @version 3.0.0-alpha1
 */
var LoggingCloudfilesAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingCloudfilesAllOf</code>.
   * @alias module:model/LoggingCloudfilesAllOf
   */
  function LoggingCloudfilesAllOf() {
    _classCallCheck(this, LoggingCloudfilesAllOf);

    LoggingCloudfilesAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingCloudfilesAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingCloudfilesAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingCloudfilesAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingCloudfilesAllOf} The populated <code>LoggingCloudfilesAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingCloudfilesAllOf();

        if (data.hasOwnProperty('access_key')) {
          obj['access_key'] = _ApiClient["default"].convertToType(data['access_key'], 'String');
        }

        if (data.hasOwnProperty('bucket_name')) {
          obj['bucket_name'] = _ApiClient["default"].convertToType(data['bucket_name'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('region')) {
          obj['region'] = _ApiClient["default"].convertToType(data['region'], 'String');
        }

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _ApiClient["default"].convertToType(data['public_key'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingCloudfilesAllOf;
}();
/**
 * Your Cloud Files account access key.
 * @member {String} access_key
 */


LoggingCloudfilesAllOf.prototype['access_key'] = undefined;
/**
 * The name of your Cloud Files container.
 * @member {String} bucket_name
 */

LoggingCloudfilesAllOf.prototype['bucket_name'] = undefined;
/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */

LoggingCloudfilesAllOf.prototype['path'] = 'null';
/**
 * The region to stream logs to.
 * @member {module:model/LoggingCloudfilesAllOf.RegionEnum} region
 */

LoggingCloudfilesAllOf.prototype['region'] = undefined;
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */

LoggingCloudfilesAllOf.prototype['public_key'] = 'null';
/**
 * The username for your Cloud Files account.
 * @member {String} user
 */

LoggingCloudfilesAllOf.prototype['user'] = undefined;
/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */

LoggingCloudfilesAllOf['RegionEnum'] = {
  /**
   * value: "DFW"
   * @const
   */
  "DFW": "DFW",

  /**
   * value: "ORD"
   * @const
   */
  "ORD": "ORD",

  /**
   * value: "IAD"
   * @const
   */
  "IAD": "IAD",

  /**
   * value: "LON"
   * @const
   */
  "LON": "LON",

  /**
   * value: "SYD"
   * @const
   */
  "SYD": "SYD",

  /**
   * value: "HKG"
   * @const
   */
  "HKG": "HKG",

  /**
   * value: "null"
   * @const
   */
  "null": "null"
};
var _default = LoggingCloudfilesAllOf;
exports["default"] = _default;