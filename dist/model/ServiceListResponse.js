"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SchemasVersionResponse = _interopRequireDefault(require("./SchemasVersionResponse"));

var _ServiceCreate = _interopRequireDefault(require("./ServiceCreate"));

var _ServiceListResponseAllOf = _interopRequireDefault(require("./ServiceListResponseAllOf"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceListResponse model module.
 * @module model/ServiceListResponse
 * @version 3.0.0-alpha1
 */
var ServiceListResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceListResponse</code>.
   * @alias module:model/ServiceListResponse
   * @implements module:model/Timestamps
   * @implements module:model/ServiceCreate
   * @implements module:model/ServiceListResponseAllOf
   */
  function ServiceListResponse() {
    _classCallCheck(this, ServiceListResponse);

    _Timestamps["default"].initialize(this);

    _ServiceCreate["default"].initialize(this);

    _ServiceListResponseAllOf["default"].initialize(this);

    ServiceListResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceListResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceListResponse} obj Optional instance to populate.
     * @return {module:model/ServiceListResponse} The populated <code>ServiceListResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceListResponse();

        _Timestamps["default"].constructFromObject(data, obj);

        _ServiceCreate["default"].constructFromObject(data, obj);

        _ServiceListResponseAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('deleted_at')) {
          obj['deleted_at'] = _ApiClient["default"].convertToType(data['deleted_at'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('customer_id')) {
          obj['customer_id'] = _ApiClient["default"].convertToType(data['customer_id'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('versions')) {
          obj['versions'] = _ApiClient["default"].convertToType(data['versions'], [_SchemasVersionResponse["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ServiceListResponse;
}();
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */


ServiceListResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

ServiceListResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

ServiceListResponse.prototype['updated_at'] = undefined;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */

ServiceListResponse.prototype['comment'] = undefined;
/**
 * The name of the service.
 * @member {String} name
 */

ServiceListResponse.prototype['name'] = undefined;
/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */

ServiceListResponse.prototype['customer_id'] = undefined;
/**
 * The type of this service.
 * @member {module:model/ServiceListResponse.TypeEnum} type
 */

ServiceListResponse.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} id
 */

ServiceListResponse.prototype['id'] = undefined;
/**
 * Current [version](/reference/api/services/version/) of the service.
 * @member {Number} version
 */

ServiceListResponse.prototype['version'] = undefined;
/**
 * A list of [versions](/reference/api/services/version/) associated with the service.
 * @member {Array.<module:model/SchemasVersionResponse>} versions
 */

ServiceListResponse.prototype['versions'] = undefined; // Implement Timestamps interface:

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

_Timestamps["default"].prototype['updated_at'] = undefined; // Implement ServiceCreate interface:

/**
 * A freeform descriptive note.
 * @member {String} comment
 */

_ServiceCreate["default"].prototype['comment'] = undefined;
/**
 * The name of the service.
 * @member {String} name
 */

_ServiceCreate["default"].prototype['name'] = undefined;
/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */

_ServiceCreate["default"].prototype['customer_id'] = undefined;
/**
 * The type of this service.
 * @member {module:model/ServiceCreate.TypeEnum} type
 */

_ServiceCreate["default"].prototype['type'] = undefined; // Implement ServiceListResponseAllOf interface:

/**
 * Alphanumeric string identifying the service.
 * @member {String} id
 */

_ServiceListResponseAllOf["default"].prototype['id'] = undefined;
/**
 * Current [version](/reference/api/services/version/) of the service.
 * @member {Number} version
 */

_ServiceListResponseAllOf["default"].prototype['version'] = undefined;
/**
 * A list of [versions](/reference/api/services/version/) associated with the service.
 * @member {Array.<module:model/SchemasVersionResponse>} versions
 */

_ServiceListResponseAllOf["default"].prototype['versions'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

ServiceListResponse['TypeEnum'] = {
  /**
   * value: "vcl"
   * @const
   */
  "vcl": "vcl",

  /**
   * value: "wasm"
   * @const
   */
  "wasm": "wasm"
};
var _default = ServiceListResponse;
exports["default"] = _default;