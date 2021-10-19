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
 * The LoggingOpenstackAllOf model module.
 * @module model/LoggingOpenstackAllOf
 * @version 3.0.0-alpha1
 */
var LoggingOpenstackAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingOpenstackAllOf</code>.
   * @alias module:model/LoggingOpenstackAllOf
   */
  function LoggingOpenstackAllOf() {
    _classCallCheck(this, LoggingOpenstackAllOf);

    LoggingOpenstackAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingOpenstackAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingOpenstackAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingOpenstackAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingOpenstackAllOf} The populated <code>LoggingOpenstackAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingOpenstackAllOf();

        if (data.hasOwnProperty('access_key')) {
          obj['access_key'] = _ApiClient["default"].convertToType(data['access_key'], 'String');
        }

        if (data.hasOwnProperty('bucket_name')) {
          obj['bucket_name'] = _ApiClient["default"].convertToType(data['bucket_name'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _ApiClient["default"].convertToType(data['public_key'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingOpenstackAllOf;
}();
/**
 * Your OpenStack account access key.
 * @member {String} access_key
 */


LoggingOpenstackAllOf.prototype['access_key'] = undefined;
/**
 * The name of your OpenStack container.
 * @member {String} bucket_name
 */

LoggingOpenstackAllOf.prototype['bucket_name'] = undefined;
/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */

LoggingOpenstackAllOf.prototype['path'] = 'null';
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */

LoggingOpenstackAllOf.prototype['public_key'] = 'null';
/**
 * Your OpenStack auth url.
 * @member {String} url
 */

LoggingOpenstackAllOf.prototype['url'] = undefined;
/**
 * The username for your OpenStack account.
 * @member {String} user
 */

LoggingOpenstackAllOf.prototype['user'] = undefined;
var _default = LoggingOpenstackAllOf;
exports["default"] = _default;