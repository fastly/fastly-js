"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AclEntry = _interopRequireDefault(require("./AclEntry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AclEntries model module.
 * @module model/AclEntries
 * @version 3.0.0-alpha1
 */
var AclEntries = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AclEntries</code>.
   * @alias module:model/AclEntries
   */
  function AclEntries() {
    _classCallCheck(this, AclEntries);

    AclEntries.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AclEntries, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AclEntries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AclEntries} obj Optional instance to populate.
     * @return {module:model/AclEntries} The populated <code>AclEntries</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AclEntries();

        if (data.hasOwnProperty('entries')) {
          obj['entries'] = _ApiClient["default"].convertToType(data['entries'], [_AclEntry["default"]]);
        }
      }

      return obj;
    }
  }]);

  return AclEntries;
}();
/**
 * @member {Array.<module:model/AclEntry>} entries
 */


AclEntries.prototype['entries'] = undefined;
var _default = AclEntries;
exports["default"] = _default;