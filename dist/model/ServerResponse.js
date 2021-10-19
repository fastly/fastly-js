"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Server = _interopRequireDefault(require("./Server"));

var _ServerResponseAllOf = _interopRequireDefault(require("./ServerResponseAllOf"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServerResponse model module.
 * @module model/ServerResponse
 * @version 3.0.0-alpha1
 */
var ServerResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServerResponse</code>.
   * @alias module:model/ServerResponse
   */
  function ServerResponse() {
    _classCallCheck(this, ServerResponse);

    ServerResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServerResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServerResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServerResponse} obj Optional instance to populate.
     * @return {module:model/ServerResponse} The populated <code>ServerResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServerResponse();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('disabled')) {
          obj['disabled'] = _ApiClient["default"].convertToType(data['disabled'], 'Boolean');
        }

        if (data.hasOwnProperty('max_conn')) {
          obj['max_conn'] = _ApiClient["default"].convertToType(data['max_conn'], 'Number');
        }

        if (data.hasOwnProperty('override_host')) {
          obj['override_host'] = _ApiClient["default"].convertToType(data['override_host'], 'String');
        }

        if (data.hasOwnProperty('port')) {
          obj['port'] = _ApiClient["default"].convertToType(data['port'], 'Number');
        }

        if (data.hasOwnProperty('weight')) {
          obj['weight'] = _ApiClient["default"].convertToType(data['weight'], 'Number');
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

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('pool_id')) {
          obj['pool_id'] = _ApiClient["default"].convertToType(data['pool_id'], 'String');
        }

        if (data.hasOwnProperty('service_id')) {
          obj['service_id'] = _ApiClient["default"].convertToType(data['service_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ServerResponse;
}();
/**
 * A hostname, IPv4, or IPv6 address for the server. Required.
 * @member {String} address
 */


ServerResponse.prototype['address'] = undefined;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */

ServerResponse.prototype['comment'] = undefined;
/**
 * Allows servers to be enabled and disabled in a pool.
 * @member {Boolean} disabled
 * @default false
 */

ServerResponse.prototype['disabled'] = false;
/**
 * Maximum number of connections. If the value is `0`, it inherits the value from pool's `max_conn_default`.
 * @member {Number} max_conn
 * @default 0
 */

ServerResponse.prototype['max_conn'] = 0;
/**
 * The hostname to override the Host header. Defaults to `null` meaning no override of the Host header if not set. This setting can also be added to a Pool definition. However, the server setting will override the Pool setting.
 * @member {String} override_host
 * @default 'null'
 */

ServerResponse.prototype['override_host'] = 'null';
/**
 * Port number. Setting port `443` does not force TLS. Set `use_tls` in pool to force TLS.
 * @member {Number} port
 * @default 80
 */

ServerResponse.prototype['port'] = 80;
/**
 * Weight (`1-100`) used to load balance this server against others.
 * @member {Number} weight
 * @default 100
 */

ServerResponse.prototype['weight'] = 100;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

ServerResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

ServerResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

ServerResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying a Server.
 * @member {String} id
 */

ServerResponse.prototype['id'] = undefined;
/**
 * Alphanumeric string identifying a Pool.
 * @member {String} pool_id
 */

ServerResponse.prototype['pool_id'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

ServerResponse.prototype['service_id'] = undefined;
var _default = ServerResponse;
exports["default"] = _default;