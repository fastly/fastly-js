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
 * The LoggingSftpAllOf model module.
 * @module model/LoggingSftpAllOf
 * @version 3.0.0-alpha1
 */
var LoggingSftpAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingSftpAllOf</code>.
   * @alias module:model/LoggingSftpAllOf
   */
  function LoggingSftpAllOf() {
    _classCallCheck(this, LoggingSftpAllOf);

    LoggingSftpAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingSftpAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingSftpAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingSftpAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingSftpAllOf} The populated <code>LoggingSftpAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingSftpAllOf();

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('port')) {
          obj['port'] = _ApiClient["default"].convertToType(data['port'], Object);
        }

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _ApiClient["default"].convertToType(data['public_key'], 'String');
        }

        if (data.hasOwnProperty('secret_key')) {
          obj['secret_key'] = _ApiClient["default"].convertToType(data['secret_key'], 'String');
        }

        if (data.hasOwnProperty('ssh_known_hosts')) {
          obj['ssh_known_hosts'] = _ApiClient["default"].convertToType(data['ssh_known_hosts'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingSftpAllOf;
}();
/**
 * The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
 * @member {String} password
 */


LoggingSftpAllOf.prototype['password'] = undefined;
/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */

LoggingSftpAllOf.prototype['path'] = 'null';
/**
 * The port number.
 * @member {Object} port
 */

LoggingSftpAllOf.prototype['port'] = undefined;
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */

LoggingSftpAllOf.prototype['public_key'] = 'null';
/**
 * The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
 * @member {String} secret_key
 * @default 'null'
 */

LoggingSftpAllOf.prototype['secret_key'] = 'null';
/**
 * A list of host keys for all hosts we can connect to over SFTP.
 * @member {String} ssh_known_hosts
 */

LoggingSftpAllOf.prototype['ssh_known_hosts'] = undefined;
/**
 * The username for the server.
 * @member {String} user
 */

LoggingSftpAllOf.prototype['user'] = undefined;
var _default = LoggingSftpAllOf;
exports["default"] = _default;