"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Service = _interopRequireDefault(require("./Service"));

var _ServiceCreateAllOf = _interopRequireDefault(require("./ServiceCreateAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceCreate model module.
 * @module model/ServiceCreate
 * @version 3.0.0-alpha1
 */
var ServiceCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceCreate</code>.
   * @alias module:model/ServiceCreate
   * @implements module:model/Service
   * @implements module:model/ServiceCreateAllOf
   */
  function ServiceCreate() {
    _classCallCheck(this, ServiceCreate);

    _Service["default"].initialize(this);

    _ServiceCreateAllOf["default"].initialize(this);

    ServiceCreate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceCreate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceCreate} obj Optional instance to populate.
     * @return {module:model/ServiceCreate} The populated <code>ServiceCreate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceCreate();

        _Service["default"].constructFromObject(data, obj);

        _ServiceCreateAllOf["default"].constructFromObject(data, obj);

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
      }

      return obj;
    }
  }]);

  return ServiceCreate;
}();
/**
 * A freeform descriptive note.
 * @member {String} comment
 */


ServiceCreate.prototype['comment'] = undefined;
/**
 * The name of the service.
 * @member {String} name
 */

ServiceCreate.prototype['name'] = undefined;
/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */

ServiceCreate.prototype['customer_id'] = undefined;
/**
 * The type of this service.
 * @member {module:model/ServiceCreate.TypeEnum} type
 */

ServiceCreate.prototype['type'] = undefined; // Implement Service interface:

/**
 * A freeform descriptive note.
 * @member {String} comment
 */

_Service["default"].prototype['comment'] = undefined;
/**
 * The name of the service.
 * @member {String} name
 */

_Service["default"].prototype['name'] = undefined;
/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */

_Service["default"].prototype['customer_id'] = undefined; // Implement ServiceCreateAllOf interface:

/**
 * The type of this service.
 * @member {module:model/ServiceCreateAllOf.TypeEnum} type
 */

_ServiceCreateAllOf["default"].prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

ServiceCreate['TypeEnum'] = {
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
var _default = ServiceCreate;
exports["default"] = _default;