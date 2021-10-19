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
 * The LoggingAzureblobAllOf model module.
 * @module model/LoggingAzureblobAllOf
 * @version 3.0.0-alpha1
 */
var LoggingAzureblobAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingAzureblobAllOf</code>.
   * @alias module:model/LoggingAzureblobAllOf
   */
  function LoggingAzureblobAllOf() {
    _classCallCheck(this, LoggingAzureblobAllOf);

    LoggingAzureblobAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingAzureblobAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingAzureblobAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingAzureblobAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingAzureblobAllOf} The populated <code>LoggingAzureblobAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingAzureblobAllOf();

        if (data.hasOwnProperty('account_name')) {
          obj['account_name'] = _ApiClient["default"].convertToType(data['account_name'], 'String');
        }

        if (data.hasOwnProperty('container')) {
          obj['container'] = _ApiClient["default"].convertToType(data['container'], 'String');
        }

        if (data.hasOwnProperty('file_max_bytes')) {
          obj['file_max_bytes'] = _ApiClient["default"].convertToType(data['file_max_bytes'], 'Number');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _ApiClient["default"].convertToType(data['public_key'], 'String');
        }

        if (data.hasOwnProperty('sas_token')) {
          obj['sas_token'] = _ApiClient["default"].convertToType(data['sas_token'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingAzureblobAllOf;
}();
/**
 * The unique Azure Blob Storage namespace in which your data objects are stored. Required.
 * @member {String} account_name
 */


LoggingAzureblobAllOf.prototype['account_name'] = undefined;
/**
 * The name of the Azure Blob Storage container in which to store logs. Required.
 * @member {String} container
 */

LoggingAzureblobAllOf.prototype['container'] = undefined;
/**
 * The maximum number of bytes for each uploaded file. A value of 0 can be used to indicate there is no limit on the size of uploaded files, otherwise the minimum value is 1048576 bytes (1 MiB.)
 * @member {Number} file_max_bytes
 */

LoggingAzureblobAllOf.prototype['file_max_bytes'] = undefined;
/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */

LoggingAzureblobAllOf.prototype['path'] = 'null';
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */

LoggingAzureblobAllOf.prototype['public_key'] = 'null';
/**
 * The Azure shared access signature providing write access to the blob service objects. Be sure to update your token before it expires or the logging functionality will not work. Required.
 * @member {String} sas_token
 */

LoggingAzureblobAllOf.prototype['sas_token'] = undefined;
var _default = LoggingAzureblobAllOf;
exports["default"] = _default;