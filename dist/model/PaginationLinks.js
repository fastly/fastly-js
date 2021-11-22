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
 * The PaginationLinks model module.
 * @module model/PaginationLinks
 * @version 3.0.0-alpha1
 */
var PaginationLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaginationLinks</code>.
   * @alias module:model/PaginationLinks
   */
  function PaginationLinks() {
    _classCallCheck(this, PaginationLinks);

    PaginationLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaginationLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaginationLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginationLinks} obj Optional instance to populate.
     * @return {module:model/PaginationLinks} The populated <code>PaginationLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaginationLinks();

        if (data.hasOwnProperty('first')) {
          obj['first'] = _ApiClient["default"].convertToType(data['first'], 'String');
        }

        if (data.hasOwnProperty('last')) {
          obj['last'] = _ApiClient["default"].convertToType(data['last'], 'String');
        }

        if (data.hasOwnProperty('prev')) {
          obj['prev'] = _ApiClient["default"].convertToType(data['prev'], 'String');
        }

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PaginationLinks;
}();
/**
 * The first page of data.
 * @member {String} first
 */


PaginationLinks.prototype['first'] = undefined;
/**
 * The last page of data.
 * @member {String} last
 */

PaginationLinks.prototype['last'] = undefined;
/**
 * The previous page of data.
 * @member {String} prev
 */

PaginationLinks.prototype['prev'] = undefined;
/**
 * The next page of data.
 * @member {String} next
 */

PaginationLinks.prototype['next'] = undefined;
var _default = PaginationLinks;
exports["default"] = _default;