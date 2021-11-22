"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NestedVersion = _interopRequireDefault(require("./NestedVersion"));

var _SchemasVersionResponse = _interopRequireDefault(require("./SchemasVersionResponse"));

var _ServiceDetailAllOf = _interopRequireDefault(require("./ServiceDetailAllOf"));

var _ServiceResponse = _interopRequireDefault(require("./ServiceResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceDetail model module.
 * @module model/ServiceDetail
 * @version 3.0.0-alpha1
 */
var ServiceDetail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceDetail</code>.
   * @alias module:model/ServiceDetail
   * @implements module:model/ServiceResponse
   * @implements module:model/ServiceDetailAllOf
   */
  function ServiceDetail() {
    _classCallCheck(this, ServiceDetail);

    _ServiceResponse["default"].initialize(this);

    _ServiceDetailAllOf["default"].initialize(this);

    ServiceDetail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceDetail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceDetail} obj Optional instance to populate.
     * @return {module:model/ServiceDetail} The populated <code>ServiceDetail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceDetail();

        _ServiceResponse["default"].constructFromObject(data, obj);

        _ServiceDetailAllOf["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('publish_key')) {
          obj['publish_key'] = _ApiClient["default"].convertToType(data['publish_key'], 'String');
        }

        if (data.hasOwnProperty('paused')) {
          obj['paused'] = _ApiClient["default"].convertToType(data['paused'], 'Boolean');
        }

        if (data.hasOwnProperty('versions')) {
          obj['versions'] = _ApiClient["default"].convertToType(data['versions'], [_SchemasVersionResponse["default"]]);
        }

        if (data.hasOwnProperty('active_version')) {
          obj['active_version'] = _NestedVersion["default"].constructFromObject(data['active_version']);
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _NestedVersion["default"].constructFromObject(data['version']);
        }
      }

      return obj;
    }
  }]);

  return ServiceDetail;
}();
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */


ServiceDetail.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

ServiceDetail.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

ServiceDetail.prototype['updated_at'] = undefined;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */

ServiceDetail.prototype['comment'] = undefined;
/**
 * The name of the service.
 * @member {String} name
 */

ServiceDetail.prototype['name'] = undefined;
/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */

ServiceDetail.prototype['customer_id'] = undefined;
/**
 * The type of this service.
 * @member {module:model/ServiceDetail.TypeEnum} type
 */

ServiceDetail.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} id
 */

ServiceDetail.prototype['id'] = undefined;
/**
 * Unused at this time.
 * @member {String} publish_key
 */

ServiceDetail.prototype['publish_key'] = undefined;
/**
 * Whether the service is paused. Services are paused due to a lack of traffic for an extended period of time. Services are resumed either when a draft version is activated or a locked version is cloned and reactivated.
 * @member {Boolean} paused
 */

ServiceDetail.prototype['paused'] = undefined;
/**
 * A list of [versions](/reference/api/services/version/) associated with the service.
 * @member {Array.<module:model/SchemasVersionResponse>} versions
 */

ServiceDetail.prototype['versions'] = undefined;
/**
 * @member {module:model/NestedVersion} active_version
 */

ServiceDetail.prototype['active_version'] = undefined;
/**
 * @member {module:model/NestedVersion} version
 */

ServiceDetail.prototype['version'] = undefined; // Implement ServiceResponse interface:

/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

_ServiceResponse["default"].prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

_ServiceResponse["default"].prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

_ServiceResponse["default"].prototype['updated_at'] = undefined;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */

_ServiceResponse["default"].prototype['comment'] = undefined;
/**
 * The name of the service.
 * @member {String} name
 */

_ServiceResponse["default"].prototype['name'] = undefined;
/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */

_ServiceResponse["default"].prototype['customer_id'] = undefined;
/**
 * The type of this service.
 * @member {module:model/ServiceResponse.TypeEnum} type
 */

_ServiceResponse["default"].prototype['type'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} id
 */

_ServiceResponse["default"].prototype['id'] = undefined;
/**
 * Unused at this time.
 * @member {String} publish_key
 */

_ServiceResponse["default"].prototype['publish_key'] = undefined;
/**
 * Whether the service is paused. Services are paused due to a lack of traffic for an extended period of time. Services are resumed either when a draft version is activated or a locked version is cloned and reactivated.
 * @member {Boolean} paused
 */

_ServiceResponse["default"].prototype['paused'] = undefined;
/**
 * A list of [versions](/reference/api/services/version/) associated with the service.
 * @member {Array.<module:model/SchemasVersionResponse>} versions
 */

_ServiceResponse["default"].prototype['versions'] = undefined; // Implement ServiceDetailAllOf interface:

/**
 * @member {module:model/NestedVersion} active_version
 */

_ServiceDetailAllOf["default"].prototype['active_version'] = undefined;
/**
 * @member {module:model/NestedVersion} version
 */

_ServiceDetailAllOf["default"].prototype['version'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

ServiceDetail['TypeEnum'] = {
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
var _default = ServiceDetail;
exports["default"] = _default;