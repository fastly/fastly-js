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
 * The PaginationMeta model module.
 * @module model/PaginationMeta
 * @version 3.0.0-alpha1
 */
var PaginationMeta = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaginationMeta</code>.
   * @alias module:model/PaginationMeta
   */
  function PaginationMeta() {
    _classCallCheck(this, PaginationMeta);

    PaginationMeta.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaginationMeta, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaginationMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginationMeta} obj Optional instance to populate.
     * @return {module:model/PaginationMeta} The populated <code>PaginationMeta</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaginationMeta();

        if (data.hasOwnProperty('current_page')) {
          obj['current_page'] = _ApiClient["default"].convertToType(data['current_page'], 'Number');
        }

        if (data.hasOwnProperty('per_page')) {
          obj['per_page'] = _ApiClient["default"].convertToType(data['per_page'], 'Number');
        }

        if (data.hasOwnProperty('record_count')) {
          obj['record_count'] = _ApiClient["default"].convertToType(data['record_count'], 'Number');
        }

        if (data.hasOwnProperty('total_pages')) {
          obj['total_pages'] = _ApiClient["default"].convertToType(data['total_pages'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PaginationMeta;
}();
/**
 * Current page.
 * @member {Number} current_page
 */


PaginationMeta.prototype['current_page'] = undefined;
/**
 * Number of records per page.
 * @member {Number} per_page
 * @default 20
 */

PaginationMeta.prototype['per_page'] = 20;
/**
 * Total records in result set.
 * @member {Number} record_count
 */

PaginationMeta.prototype['record_count'] = undefined;
/**
 * Total pages in result set.
 * @member {Number} total_pages
 */

PaginationMeta.prototype['total_pages'] = undefined;
var _default = PaginationMeta;
exports["default"] = _default;