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
 * The Service model module.
 * @module model/Service
 * @version 3.0.0-alpha1
 */
var Service = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Service</code>.
   * @alias module:model/Service
   */
  function Service() {
    _classCallCheck(this, Service);

    Service.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Service, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Service</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Service} obj Optional instance to populate.
     * @return {module:model/Service} The populated <code>Service</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Service();

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('customer_id')) {
          obj['customer_id'] = _ApiClient["default"].convertToType(data['customer_id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Service;
}();
/**
 * A freeform descriptive note.
 * @member {String} comment
 */


Service.prototype['comment'] = undefined;
/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */

Service.prototype['customer_id'] = undefined;
/**
 * The name of the service.
 * @member {String} name
 */

Service.prototype['name'] = undefined;
var _default = Service;
exports["default"] = _default;