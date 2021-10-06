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
 * The DomainCheckItem model module.
 * @module model/DomainCheckItem
 * @version 3.0.0-alpha1
 */
var DomainCheckItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DomainCheckItem</code>.
   * @alias module:model/DomainCheckItem
   */
  function DomainCheckItem() {
    _classCallCheck(this, DomainCheckItem);

    DomainCheckItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DomainCheckItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DomainCheckItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DomainCheckItem} obj Optional instance to populate.
     * @return {module:model/DomainCheckItem} The populated <code>DomainCheckItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DomainCheckItem();

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DomainCheckItem;
}();
/**
 * A freeform descriptive note.
 * @member {String} comment
 */


DomainCheckItem.prototype['comment'] = undefined;
/**
 * The name of the domain or domains associated with this service.
 * @member {String} name
 */

DomainCheckItem.prototype['name'] = undefined;
var _default = DomainCheckItem;
exports["default"] = _default;